import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Container = styled.div`
  width: 100vw;
  height: auto;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Top = styled.div`
  margin: 4rem auto 3rem auto;
`
const SearchInput = styled.input`
  padding: 0.8rem;
  font-size: 1.2rem;
  letter-spacing: 2px;
  outline: none;
`
const SearchButton = styled.button`
  padding: 0.8rem;
  font-size: 1.2rem;
  outline: none;
`
const Bottom = styled.div`
  width: 0 auto;
  max-width: 80%;`
const Results = styled.ul`
  margin: 1rem;
  list-style: none;
`
const Checkbox = styled.input`
  margin-right: 0.5rem;
  width: 15px;
  height: 15px;
  cursor: pointer;
`
const Collocation = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
`
const Examples = styled.li`
  font-size: 1.0rem;
  letter-spacing: 2px;
  line-height: 1.4;
`


const Search = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([{
        collocation: "",
        examples: []
  }])
  const [isLoading, setIsLoading] = useState(false)

  // let strippedString = originalString.replace(/(<([^>]+)>)/gi, "");
  // const convertedExamples = results.map(result => result.examples.replace(/<\/?[^>]+>/gi, ''))

  const options = {
    method: 'GET',
    url: 'https://linguatools-english-collocations.p.rapidapi.com/bolls/',
    // params: {lang: 'en', query: 'smoke', max_results: '15'},
    params: {lang: 'en', query: `${search}`, max_results: '10'},
    headers: {
      'x-rapidapi-host': process.env.REACT_APP_rapidapi_host,
      'x-rapidapi-key': process.env.REACT_APP_rapidapi_key,
    }
  };
  
  const searchWord = async () => {
      await axios.request(options).then((res) => {
        setResults(res.data)
      }).catch((err) => {
        console.error(err);
      });
      setIsLoading(true)
  }


  return (
    <Container>
      <Navbar /> 
      <Wrapper>
        <Top>
          <SearchInput type="text" placeholder='search' onChange={(e) => setSearch(e.target.value)}  />
          <SearchButton onClick={searchWord} >search</SearchButton>
        </Top>

        <Bottom>
          {isLoading && results.map(result => (
            <Results key={result.id}>
              <Checkbox type='checkbox' id='resultId'  />
              {/* <Checkbox type='checkbox' id='resultId' onClick={handleAddToWordlist} /> */}
              <Collocation htmlFor='resultId'>{result.collocation}</Collocation>
              <Examples>{result.examples}</Examples>
              {/* <Examples>{result.examples.map(ex => (
                <li key={ex.index}>{ex}</li>
              ))}</Examples> */}
            </Results>
          ))}
        </Bottom>

      </Wrapper>
    </Container>
  )
}

export default Search

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { addWordlist } from '../redux/apiCalls'
import Checkbox from '@mui/material/Checkbox';


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
  max-width: 80%;
`
const Results = styled.ul`
  margin: 1rem;
  list-style: none;
`
// const Checkbox = styled.input`
//   margin-right: 0.5rem;
//   width: 15px;
//   height: 15px;
//   cursor: pointer;
// `
// const Collocation = styled.label`
//   margin-bottom: 0.5rem;
//   font-size: 1.2rem;
//   cursor: pointer;
// `
const Collocation = styled.li`
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
  const [inputSearch, setInputSearch] = useState('')
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([{
        id: "",
        collocation: "",
        examples: []
  }])
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const [practiceList, setPracticeList] = useState(
    {
      collocation: "",
      examples: []
    }
  )


  const options = {
    method: 'GET',
    url: 'https://linguatools-english-collocations.p.rapidapi.com/bolls/',
    params: {lang: 'en', query: `${inputSearch}`, max_results: '10'},
    headers: {
      'x-rapidapi-host': process.env.REACT_APP_rapidapi_host,
      'x-rapidapi-key': process.env.REACT_APP_rapidapi_key,
    }
  };
  
  const searchWord = async () => {
    setSearch(inputSearch)
    setInputSearch('')

    await axios.request(options).then((res) => {
      setResults(res.data)
    }).catch((err) => {
      console.error(err);
    });
    setIsLoading(true)
  }

  const handleAdd = (value) => {
    const { collocation, examples } = value
    const wordlist = { collocation, examples }
    addWordlist(dispatch, wordlist)
  }


  return (
    <Container>
      <Navbar /> 
      <Wrapper>
        <Top>
          <SearchInput type="text" value={inputSearch || ""} placeholder='search' onChange={(e) => setInputSearch(e.target.value)}  />
          <SearchButton onClick={searchWord} >search</SearchButton>
        </Top>

        <Bottom>
          {isLoading && results.map(result => (
            <Results key={result.id}>
              <Collocation onClick={() => handleAdd(result)}>
                {/* <Checkbox  />{result.collocation}  */}
                {result.collocation} <button>Add</button>
              </Collocation>
 
              {result.examples.map(example => (
                <Examples key={example} dangerouslySetInnerHTML={{ __html: example }} />
              ))}
              
            </Results>
          ))}
        </Bottom>

      </Wrapper>
    </Container>
  )
}

export default Search

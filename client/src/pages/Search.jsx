import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import styled from 'styled-components'
import { addWordlist } from '../redux/apiCalls'
import Navbar from '../components/Navbar'
import responsive from '../responsive'


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
    setIsLoading(true)
    await axios.request(options).then((res) => {
      setResults(res.data)
    }).catch((err) => {
      console.error(err);
    });
    setIsLoading(false)
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
          <SearchInput 
            type="text" 
              value={inputSearch || ""} 
              placeholder='Enter a word' 
              onChange={(e) => setInputSearch(e.target.value)}  
          />
          <SearchButton onClick={searchWord} >search</SearchButton>
        </Top>
        <Bottom>
          {isLoading ? <p>Loading...</p> 
          : results.map(result => ( 
            <Results key={result.id}>
              <Collocation onClick={() => handleAdd(result)}>
                <b>{result.collocation}</b> <AddButton isSearch={search}>Add</AddButton>
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
  margin: 2rem auto 2rem auto;
  text-align: center;

    @media only screen and ${responsive.device.m}{
      margin: 4rem auto 3rem auto;
      width: 60%;
    }
    @media only screen and ${responsive.device.xl}{
      width: 40%;
    }
`
const SearchInput = styled.input`
  padding: 0.5rem 0.1rem 0.5rem 0.8rem;
  font-size: 1rem;
  letter-spacing: 2px;
  outline: none;
  border: 1px solid #c0c0c0;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  width: 70%;

    @media only screen and ${responsive.device.s}{
      padding: 0.5rem 0.1rem 0.5rem 1rem;
      font-size: 1.2rem;
    }
    @media only screen and ${responsive.device.m}{
      padding: 0.8rem 0.1rem 0.8rem 1rem;
      font-size: 0.9rem;
    }
    @media only screen and ${responsive.device.l}{
      padding: 0.8rem 0.1rem 0.8rem 1.2rem;
      font-size: 1.2rem;
    }
    @media only screen and ${responsive.device.xl}{
      padding: 0.8rem 0.1rem 0.8rem 1.4rem;
      font-size: 1.4rem;
    }
`
const SearchButton = styled.button`
  padding: 0.5rem 0.7rem 0.5rem 0.5rem;
  font-size: 1rem;
  letter-spacing: 2px;
  outline: none;
  border: 1px solid #c0c0c0;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 30%;
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
  color: #fff;

    @media only screen and ${responsive.device.s}{
      font-size: 1.2rem;
    }
    @media only screen and ${responsive.device.m}{
      padding: 0.8rem 1rem 0.8rem 0.8rem;
      font-size: 0.9rem;
    }
    @media only screen and ${responsive.device.l}{
      padding: 0.8rem;
      font-size: 1.2rem;
    }
    @media only screen and ${responsive.device.xl}{
      font-size: 1.4rem;
    }
`
const Bottom = styled.div`
  max-width: 80%;
  background-color: #fff;
  @media only screen and ${responsive.device.l}{
    max-width: 70%;
  }
`
const Results = styled.ul`
  margin: 1rem;
  list-style: none;
`
const Collocation = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;

  @media only screen and ${responsive.device.s}{
    font-size: 1.4rem;
  }
  @media only screen and ${responsive.device.m}{
    font-size: 1.2rem;
  }
  @media only screen and ${responsive.device.l}{
    font-size: 1.6rem;
  }
  @media only screen and ${responsive.device.xl}{
    font-size: 1.8rem;
  }
`
const AddButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.3rem;
  font-size: 0.8rem;
  letter-spacing: 2px;
  cursor: pointer;
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
  border: 1px solid #c0c0c0;
  border-radius: 3px;
  color: #fff;
  visibility: ${props => props.isSearch === '' ?  "hidden" : "visible" };

  @media only screen and ${responsive.device.l}{
    font-size: 1.2rem;
  }
  @media only screen and ${responsive.device.xl}{
    font-size: 1.4rem;
  }
`
const Examples = styled.li`
  font-size: 1rem;
  letter-spacing: 2px;
  line-height: 1.4;

    @media only screen and ${responsive.device.s}{
      font-size: 1.2rem;
    }
    @media only screen and ${responsive.device.m}{
      font-size: 1rem;
    }
    @media only screen and ${responsive.device.l}{
      font-size: 1.4rem;
    }
    @media only screen and ${responsive.device.xl}{
      font-size: 1.6rem;
    }
`
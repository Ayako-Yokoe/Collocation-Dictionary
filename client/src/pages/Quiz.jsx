import React, { useState, useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import responsive from '../responsive'

import Snackbar from '../components/Snackbar'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* height: auto; */
  width: 80%;
  margin: 5rem auto 1rem auto;

  @media only screen and ${responsive.device.m}{
    flex-direction: row;
  }
`
const SearchField = styled.div`
  flex: 1;
  text-align: center;
`
const InputField = styled.input`
  padding: 0.5rem 0.1rem 0.5rem 1.0rem;
  font-size: 1rem;
  width: 60%;
  outline: none;
  border: 1px solid #c0c0c0;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;

  @media only screen and ${responsive.device.m}{
    font-size: 1rem;
  }
  @media only screen and ${responsive.device.l}{
    font-size: 1.3rem;
    letter-spacing: 2px;
  }
  @media only screen and ${responsive.device.xl}{
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
  }
`
const Button = styled.button`
  padding: 0.5rem 0.7rem 0.5rem 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
  border: 1px solid #c0c0c0;
  border-radius: 3px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  color: #fff;
 

  @media only screen and ${responsive.device.m}{
    font-size: 1rem;
  }
  @media only screen and ${responsive.device.l}{
    font-size: 1.3rem;
    letter-spacing: 2px;
  }
  @media only screen and ${responsive.device.xl}{
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
  }
`
const SearchWord = styled.p`
  font-size: 1.2rem;
  letter-spacing: 2px;
  padding: 1.5rem 1rem;
  text-align: start;

  @media only screen and ${responsive.device.m}{
    padding: 2rem 1rem;
  }
  @media only screen and ${responsive.device.m}{
    font-size: 1rem;
  }
  @media only screen and ${responsive.device.l}{
    font-size: 1.3rem;
    letter-spacing: 2px;
  }
  @media only screen and ${responsive.device.xl}{
    font-size: 1.5rem;
  }
`
const TestWord = styled.span`
  font-weight: 500;
  padding-left: 0.8rem;
  letter-spacing: 2px;

`
const AnswerField = styled.div`
  flex: 2;
  text-align: center;
`
const Answer = styled.p`
  font-size: 1.2rem;
  padding: 2rem;



  @media only screen and ${responsive.device.m}{
    padding: 2rem 1rem;
  }
  @media only screen and ${responsive.device.m}{
    font-size: 1rem;
  }
  @media only screen and ${responsive.device.l}{
    font-size: 1.3rem;
    letter-spacing: 2px;
  }
  @media only screen and ${responsive.device.xl}{
    font-size: 1.5rem;
  }
`

const ResetButton = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    letter-spacing: 2px;
    cursor: pointer;
    position: fixed;
    bottom: 40px;
    left: 45%;
    background-color: #0093E9;
    background-image: linear-gradient(0deg, #0093E9 0%, #80D0C7 100%);
    border: 1px solid #c0c0c0;
    border-radius: 3px;
    color: #fff;

    @media only screen and ${responsive.device.l}{
      font-size: 1.3rem;
      letter-spacing: 2px;
    }
    @media only screen and ${responsive.device.xl}{
      padding: 0.5rem 1rem;
      font-size: 1.5rem;
    }
`


const Quiz = () => {
  const [inputSearch, setInputSearch] = useState('')
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([{
    id: "",
    collocation: "",
    examples: []
  }])
  const [isLoading, setIsLoading] = useState(false)
  const [inputAnswer, setInputAnswer] = useState('')
  const [answer, setAnswer] = useState('')
  const [correct, setCorrect] = useState(false)

  const snackbarRef = useRef(null)

  // console.log("inputSearch: " + inputSearch)
  // console.log("search: " + search)
  // console.log("results: " + results)
  // console.log("inputAnswer: " + inputAnswer)
  // console.log("answer: " + answer)
  // console.log("correct: " + correct)
  // console.log("=========================")

  const options = {
    method: 'GET',
    url: 'https://linguatools-english-collocations.p.rapidapi.com/bolls/',
    params: {lang: 'en', query: `${inputSearch}`, max_results: '15'},
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

  const handleCheckAnswer = () => {
    setAnswer(inputAnswer)
    setInputAnswer('')
    const tempAnswer = inputAnswer
    if(results === []) return
    let arr = results.filter(result => result.collocation === tempAnswer)
    arr.length > 0 ? setCorrect(true) : setCorrect(false)
    snackbarRef.current.show()
    setAnswer('')
  }

  const handleReset = () => {
    setInputSearch('')
    setSearch('')
    setResults([])
    setInputAnswer('')
    setAnswer('')
    setCorrect(false)
  }

  return (
    <Container>
      <Navbar />
      <Wrapper>
      <SearchField>
        <InputField type="text" value={inputSearch || ""} placeholder='Enter a word' onChange={(e) => setInputSearch(e.target.value)}  />
        <Button onClick={searchWord} >search</Button>
        <SearchWord>Test word: <TestWord>{search}</TestWord></SearchWord>
      </SearchField>

      <AnswerField>
        <InputField type='text' value={inputAnswer ? inputAnswer : ""} placeholder='type collocation' onChange={(e) => setInputAnswer(e.target.value)}  />
        <Button onClick={handleCheckAnswer} >check</Button>         
      </AnswerField>
      </Wrapper>

      <Snackbar ref={snackbarRef} correct={correct} />
      <ResetButton onClick={handleReset}>Reset</ResetButton>
    </Container>
  )
}

export default Quiz

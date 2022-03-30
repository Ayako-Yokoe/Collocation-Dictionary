import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Navbar from '../components/Navbar'


const Container = styled.div`
  width: 100vw;
  height: auto;
  text-align: center;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  height: 60vh;
  width: 80%;
  margin: 2rem auto;
`
const SearchField = styled.div`
  flex: 1;
  text-align: center;
  /* margin-top: 2rem; */
  /* background-color: pink; */
`
const InputField = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  width: 50%;
  outline: none;
`
const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
`
const SearchWord = styled.p`
  font-size: 1.2rem;
  padding: 2rem 2.5rem;
  text-align: start;
`
const AnswerField = styled.div`
  flex: 2;
  text-align: center;
  /* margin-top: 2rem; */
  /* background-color: lightblue; */
`
const Answer = styled.p`
  font-size: 1.2rem;
  padding: 2rem;
`

const ResetButton = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
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

  console.log("inputSearch: " + inputSearch)
  console.log("search: " + search)
  console.log("results: " + results)
  console.log("inputAnswer: " + inputAnswer)
  console.log("answer: " + answer)
  console.log("correct: " + correct)
  console.log("=========================")

  const options = {
    method: 'GET',
    url: 'https://linguatools-english-collocations.p.rapidapi.com/bolls/',
    //params: {lang: 'en', query: `${search}`, max_results: '15'},
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

      // setSearch('')
  }

  const handleCheckAnswer = () => {
    setAnswer(inputAnswer)
    setInputAnswer('')

    const tempAnswer = inputAnswer
    if(results === []) return
    let arr = results.filter(result => result.collocation === tempAnswer)
    arr.length > 0 ? setCorrect(true) : setCorrect(false)
    
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
        <InputField type="text" value={inputSearch || ""} placeholder='search' onChange={(e) => setInputSearch(e.target.value)}  />
        <Button onClick={searchWord} >search</Button>
        <SearchWord>Test word: {search}</SearchWord>
      </SearchField>

      <AnswerField>
        <InputField type='text' value={inputAnswer ? inputAnswer : ""} placeholder='type collocation' onChange={(e) => setInputAnswer(e.target.value)}  />
        <Button onClick={handleCheckAnswer} >check</Button> 
        { correct ? <Answer>Correct</Answer> : <Answer>Let's try</Answer>}
      </AnswerField>
 
      </Wrapper>
      <ResetButton onClick={handleReset}>Reset</ResetButton>
    </Container>
  )
}

export default Quiz

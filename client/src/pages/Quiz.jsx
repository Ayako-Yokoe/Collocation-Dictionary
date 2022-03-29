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
`
const SearchField = styled.div`
  flex: 1;
  text-align: center;
  margin: 2rem auto;
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
  padding: 2rem;
`
const AnswerField = styled.div`
  flex: 2;
  text-align: center;
  margin: 2rem auto;
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

  // console.log("search: " + search)
  // console.log("results: " + results)
  // console.log("inputAnswer: " + inputAnswer)
  // console.log("answer: " + answer)
  // console.log("correct: " + correct)
  // console.log("=========================")

  const options = {
    method: 'GET',
    url: 'https://linguatools-english-collocations.p.rapidapi.com/bolls/',
    params: {lang: 'en', query: 'smoke', max_results: '15'},
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

  const handleCheckAnswer = () => {
    setAnswer(inputAnswer)
    setInputAnswer('')

    const tempAnswer = inputAnswer
    if(results === []) return
    let obj = results.filter(r => r.collocation === tempAnswer)
    obj.length > 0 ? setCorrect(true) : setCorrect(false)
    
    setAnswer('')
  }

  const handleReset = () => {
    setSearch('')
    setResults([])
    setInputAnswer('')
    setAnswer('')
  }

  return (
    <Container>
      <Navbar />
      <Wrapper>
      <SearchField>
        <InputField type="text" value={search || ""} placeholder='search' onChange={(e) => setSearch(e.target.value)}  />
        <Button onClick={searchWord} >search</Button>
        <SearchWord>{search}</SearchWord>
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

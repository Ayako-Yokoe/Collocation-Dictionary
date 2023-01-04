import React, { useState, useRef } from "react"
import axios from "axios"
import Navbar from "../components/Navbar"
import Snackbar from "../components/Snackbar"
import {
  Container,
  Wrapper,
  SearchField,
  InputField,
  Button,
  SearchWord,
  TestWord,
  AnswerField,
  ResetButton,
} from "./Quiz.styles"

const Quiz = () => {
  const [inputSearch, setInputSearch] = useState("")
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([
    {
      id: "",
      collocation: "",
      examples: [],
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [inputAnswer, setInputAnswer] = useState("")
  const [answer, setAnswer] = useState("")
  const [correct, setCorrect] = useState(false)
  const snackbarRef = useRef(null)

  const options = {
    method: "GET",
    url: "https://linguatools-english-collocations.p.rapidapi.com/bolls/",
    params: { lang: "en", query: `${inputSearch}`, max_results: "15" },
    headers: {
      "x-rapidapi-host": process.env.REACT_APP_rapidapi_host,
      "x-rapidapi-key": process.env.REACT_APP_rapidapi_key,
    },
  }

  const searchWord = async () => {
    setSearch(inputSearch)
    setInputSearch("")
    await axios
      .request(options)
      .then((res) => {
        setResults(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
    setIsLoading(true)
  }

  const handleCheckAnswer = () => {
    setAnswer(inputAnswer)
    setInputAnswer("")
    const tempAnswer = inputAnswer
    if (results === []) return
    let arr = results.filter((result) => result.collocation === tempAnswer)
    arr.length > 0 ? setCorrect(true) : setCorrect(false)
    snackbarRef.current.show()
    setAnswer("")
  }

  const handleReset = () => {
    setInputSearch("")
    setSearch("")
    setResults([])
    setInputAnswer("")
    setAnswer("")
    setCorrect(false)
  }

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <SearchField>
          <InputField
            type="text"
            value={inputSearch || ""}
            placeholder="Enter a word"
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <Button onClick={searchWord}>search</Button>
          <SearchWord>
            Test word: <TestWord>{search}</TestWord>
          </SearchWord>
        </SearchField>
        <AnswerField>
          <InputField
            type="text"
            value={inputAnswer ? inputAnswer : ""}
            placeholder="type collocation"
            onChange={(e) => setInputAnswer(e.target.value)}
          />
          <Button onClick={handleCheckAnswer}>check</Button>
        </AnswerField>
      </Wrapper>
      <Snackbar ref={snackbarRef} correct={correct} />
      <div>
        <ResetButton onClick={handleReset}>Reset</ResetButton>
      </div>
    </Container>
  )
}

export default Quiz

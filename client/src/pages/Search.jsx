import React, { useState } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import { addWordlist } from "../redux/apiCalls"
import Navbar from "../components/Navbar"
import {
  Container,
  Wrapper,
  Top,
  SearchInput,
  SearchButton,
  Bottom,
  Results,
  Collocation,
  AddButton,
  Examples,
} from "./Search.styles"

const Search = () => {
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
  const dispatch = useDispatch()

  const options = {
    method: "GET",
    url: "https://linguatools-english-collocations.p.rapidapi.com/bolls/",
    params: { lang: "en", query: `${inputSearch}`, max_results: "10" },
    headers: {
      "x-rapidapi-host": process.env.REACT_APP_rapidapi_host,
      "x-rapidapi-key": process.env.REACT_APP_rapidapi_key,
    },
  }

  const searchWord = async () => {
    setSearch(inputSearch)
    setInputSearch("")
    setIsLoading(true)
    await axios
      .request(options)
      .then((res) => {
        setResults(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
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
            placeholder="Enter a word"
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <SearchButton onClick={searchWord}>search</SearchButton>
        </Top>
        <Bottom>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            results.map((result) => (
              <Results key={result.id}>
                <Collocation onClick={() => handleAdd(result)}>
                  <b>{result.collocation}</b>{" "}
                  <AddButton isSearch={search}>Add</AddButton>
                </Collocation>
                {result.examples.map((example) => (
                  <Examples
                    key={example}
                    dangerouslySetInnerHTML={{ __html: example }}
                  />
                ))}
              </Results>
            ))
          )}
        </Bottom>
      </Wrapper>
    </Container>
  )
}

export default Search

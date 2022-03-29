import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
`


// without mongodb? use direct access to api?


const Quiz = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([{
    id: "",
    collocation: "",
    examples: []
}])
  const [isLoading, setIsLoading] = useState(false)

// console.log("restults collocation: " + results[0].collocation)


  const [answer, setAnswer] = useState('')
  const [correct, setCorrect] = useState(false)


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

  // empty the input field


  const handleCheckAnswer = () => {
    results.map(result => {
      //result.collocation === answer ? setCorrect(true) : setCorrect(false)
      result.collocation === answer ? console.log("true") : console.log("false")

    })
  }


  return (
    <Container>
      <div>
        <input type="text" placeholder='search' onChange={(e) => setSearch(e.target.value)}  />
        <button onClick={searchWord} >search</button>

        <p>{search}</p>

        {/* {results && results.map(result =>  (
          <p>Collocation: {result.collocation}</p>
        ))} */}
      </div>

      <div>
        {/* <input type='text' placeholder='type collocation' value={answer} onChange={(e) => setAnswer(e.target.value)} />
        <button onClick={handleCheckAnswer}>check</button> */}

        <input type='text' placeholder='type collocation' onChange={(e) => setAnswer(e.target.value)}  />
        <button onClick={() => handleCheckAnswer()} >check</button> 
        { correct ? <p>Correct</p> : <p>Let's try</p>}
        

        {/* {results.map(result => (
            result.collocation === answer ? <p>correct</p> : <p>wrong</p>
        ))} */}
        
      </div>
    </Container>
  )
}

export default Quiz

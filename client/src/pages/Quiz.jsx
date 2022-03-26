import React, { useState } from 'react'
import axios from 'axios'



// without mongodb? use direct access to api?


const Quiz = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([{ collocation: "" }])
  const [isLoading, setIsLoading] = useState(false)

  const [answer, setAnswer] = useState('')


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
      // setResults("") ? need value?
  }

  const handleCheckAnswer = () => {
    let x 
    results.map(result => (
      result.collocation === answer 
      ? x = "correct"
      : x = "wrong"
    ))
  }

  return (
    <div>
      <div>
        <input type="text" placeholder='search' onChange={(e) => setSearch(e.target.value)}  />
        <button onClick={searchWord} >search</button>
      </div>

      <div>
        <input type='text' placeholder='collocation' value={answer} onChange={(e) => setAnswer(e.target.value)} />
        <button onClick={handleCheckAnswer}>check</button>
        {/* {results.map(result => (
            result.collocation === answer ? <p>correct</p> : <p>wrong</p>
        ))} */}
        
      </div>
    </div>
  )
}

export default Quiz

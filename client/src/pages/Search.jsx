import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Search = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  // const options = {
  //   method: 'GET',
  //   url: 'https://linguatools-english-collocations.p.rapidapi.com/bolls/',
  //   // params: {lang: 'en', query: 'smoke', max_results: '15'},
  //   params: {lang: 'en', query: `${search}`, max_results: '10'},
  //   headers: {
  //     'x-rapidapi-host': process.env.REACT_APP_rapidapi_host,
  //     'x-rapidapi-key': process.env.REACT_APP_rapidapi_key,
  //   }
  // };
  
  // axios.request(options).then((res) => {
  //   setResults(res.data)
  // }).catch((err) => {
  //   console.error(err);
  // });

  // useEffect(() => {
  // }, [search, setSearch])


  return (
    <div>

      {/* <input placeholder='search' onChange={(e) => setSearch(e.target.value)}  />
      <button >search</button>

      <div>
        {results.map(result => (
          <ul>
            <li>{result.collocation}</li>
            {/* <li>{result.example.map(ex => ()}</li> */}
          {/* </ul>
        ))}
      </div> */}

    </div>
  )
}

export default Search

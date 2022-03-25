import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { addWordlist } from '../redux/apiCalls'
import Checkbox from '@mui/material/Checkbox';
import { useCallback } from 'react'


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
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([{
        id: "",
        collocation: "",
        examples: []
  }])
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const [removedTagEx, setRemovedTagEx] = useState([])

 
  const [practiceWord, setPracticeWord] = useState("")
  // const [isSelected, setIsSelected] = useState(false)
  // const [practiceList, setPracticeList] = useState(
  //   {
  //     collocation: "",
  //     id: ""
  //   }
  // )

  // let strippedString = originalString.replace(/(<([^>]+)>)/gi, "");
  // const convertedExamples = results.map(result => result.examples.replace(/<\/?[^>]+>/gi, ''))

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


useEffect(() => {
  const tagRemove = (results) => {
    let parentArr = []
    for(let i = 0; i < results.length; i++){
      let childArr = []
      for(let j = 0; j < 3; j++){
          childArr.push(results[i].examples[j]?.replace(/<\/?[^>]+>/gi, ''))
      }
    parentArr.push(childArr.slice(0, 3)) 
    }
    return parentArr
    // setRemovedTagEx(parentArr)

    // parentArr.map(arr => {
    //   setRemovedTagEx(arr)
    // })
    

  }
  tagRemove(results)
  // setRemovedTagEx((tagRemove(results)))
  
}, [results])

console.log("typeof: " + removedTagEx)


// const tagRemove = (results) => {
//   let parentArr = []
//   for(let i = 0; i < results.length; i++){
//     let childArr = []
//     for(let j = 0; j < 3; j++){
//         childArr.push(results[i].examples[j]?.replace(/<\/?[^>]+>/gi, ''))
//     }
//   parentArr.push(childArr.slice(0, 3)) 
//   }
//   return parentArr
//   // setRemovedTagEx(parentArr)
// }



// KEEP
// const tagRemove = (results) => {
//     let parentArr = []
//     for(let i = 0; i < results.length; i++){
//       let childArr = []
//       for(let j = 0; j < 3; j++){
//           childArr.push(results[i].examples[j].replace(/<\/?[^>]+>/gi, ''))
//       }
//     parentArr.push(childArr.slice(0, 3)) 
//     }
//     return parentArr
// }
// console.log(tagRemove(results))




  useEffect(() => {
    addWordlist(dispatch, practiceWord)
  }, [practiceWord])


  return (
    <Container>
      <Navbar /> 
      <Wrapper>
        <Top>
          <SearchInput type="text" placeholder='search' onChange={(e) => setSearch(e.target.value)}  />
          <SearchButton onClick={searchWord} >search</SearchButton>
        </Top>

        <Bottom>
          {isLoading && results.map(result => (
            <Results key={result.id}>

              {/* <Checkbox type='checkbox' id='resultId'  />
              <Collocation htmlFor='resultId' >{result.collocation}</Collocation>  */}

              {/* <Checkbox type='checkbox' id='resultId'  onClick={() => handleSelect(result)}  />
              <Collocation htmlFor='resultId' onClick={() => handleSelect(result)} >{result.collocation}</Collocation> */}
              {/* <Collocation htmlFor='resultId' value={result} onClick={(e) => handleAddToWordlist(e.target.value)}>{result.collocation}</Collocation> */}

              {/* <Checkbox type='checkbox' id='resultId' value={result.id} onClick={(e) => toggleSelect(e.target.value)}  />
              <Collocation htmlFor='resultId' value={result.id} onClick={(e) => toggleSelect(e.target.value)}>{result.collocation}</Collocation> */}

              {/* <Checkbox type='checkbox' id='resultId' value={result.id}  onClick={(e) => handleAddToWordlist(e.target.value)} />
              <Collocation htmlFor='resultId' value={result.id} onClick={(e) => handleAddToWordlist(e.target.value)} >{result.collocation}</Collocation> */}

              {/* <Collocation onClick={() => handleAddToWordlist(result.collocation)}>
                <Checkbox  />{result.collocation}
              </Collocation> */}
              {/* <Collocation onClick={() => handleAddToWordlist(result.collocation)}> */}
              <Collocation onClick={() => setPracticeWord(result.collocation)}>
                {/* <Checkbox  />{result.collocation}  */}
                {result.collocation} <button>Add</button>
              </Collocation>

              {/* no break with tag */}
              {/* <Examples>{result.examples}</Examples> */}
              {/* break with tag */}
              {/* <Examples>{result.examples.map(example => <p>{example}</p>)}</Examples> */}

              {/* {removedTagEx && removedTagEx.map(example => {
                <p key={example}>{example}</p>
              })} */}

              {removedTagEx}

              
            </Results>
            
          ))}
          
        </Bottom>

      </Wrapper>
    </Container>
  )
}

export default Search

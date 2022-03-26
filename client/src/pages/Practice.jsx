import React, { useState, useEffect } from 'react'
import { publicRequest } from '../requestMethods';
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { FlashcardArray } from "react-quizlet-flashcard";

const Component = styled.div`
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Wordlist = styled.div`
  width: 70%;
  height: 60vh;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: pink;
`
const Word = styled.h2`
  margin: 2rem;
`
const Example = styled.p`
  margin: 1rem;
`
const Page = styled.div``



const Practice = () => {
  const [wordlist, setWordlist] = useState(
    [
      {
      id: "",
      front: "",
      back: "",
      }
    ]
  )

  // const [cardArr, setCardArr] = useState([])

  // const handleToArray = () => {
  //   const card = Object.values(wordlist)
  //   setCardArr(card)
  //   console.log("card: " + card)
  // }

    
  
  // const [wordlist, setWordlist] = useState(
  //   [{
  //     id: "",
  //     front: "",
  //     back: "",
  //   }]
  //   )

    

  useEffect(() => {
    const getWordlist = async () => {
        try {
            const res = await publicRequest.get('/wordlist')

            res.data.map(r => {
              setWordlist({
                id: r._id,
                front: r.collocation,
                back: r.examples.map(ex => ex + " ").replaceAll("<[^>]*>", "")
              })
            })
        } catch {}
    }
    getWordlist()
    // handleToArray()
}, [])



  return (
    <Component>
      <Navbar />
      
      <Wrapper>
        <Wordlist>

        <FlashcardArray cards={wordlist} count={false} control={false} />
        
        {/* {wordlist.map(word => (
          <p>{word.wordlist}</p>
        ))} */}

        
          
        </Wordlist>
      
      <Page>
        <Stack spacing={2}>
          <Pagination count={10} color="secondary" />
        </Stack>
      </Page>
      </Wrapper>
    </Component>
  )
}

export default Practice

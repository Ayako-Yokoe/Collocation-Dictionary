import React, { useState, useEffect } from 'react'
import { publicRequest } from '../requestMethods';
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { FlashcardArray } from 'react-quizlet-flashcard';

const Component = styled.div`
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Wordlist = styled.div`
  height: 60vh;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Word = styled.h2`
  margin: 2rem;
`
const Example = styled.p`
  margin: 1rem;
`
const Page = styled.div``



const Practice = () => {
  const [wordlist, setWordlist] = useState([{}])
  
  useEffect(() => {
    const getWordlist = async () => {
        try {
            const res = await publicRequest.get('/wordlist')
            setWordlist(res.data)
                
        } catch {}
    }
    getWordlist()
      
  }, [])



  return (
    <Component>
      <Navbar />
      
      <Wrapper>
        <Wordlist>
 
       {wordlist &&
        <FlashcardArray cards={wordlist} count={true} control={false} />
        }

        </Wordlist>
      </Wrapper>
    </Component>
  )
}

export default Practice

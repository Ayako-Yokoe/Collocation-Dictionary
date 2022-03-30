import React, { useState, useEffect } from 'react'
import { publicRequest } from '../requestMethods';
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { FlashcardArray } from 'react-quizlet-flashcard';
import responsive from '../responsive'

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
// ??
const style = {
  backgroundColor: "red",
  color: "white",
  fontSize: "0.5rem"
} 




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
          <FlashcardArray cards={wordlist} count={true} control={false} style={style} />
          }

        </Wordlist>
      </Wrapper>
    </Component>
  )
}

export default Practice

import React, { useState, useEffect } from 'react'
import { publicRequest } from '../requestMethods'
import Navbar from '../components/Navbar'
import { FlashcardArray } from 'react-quizlet-flashcard'
import styled from 'styled-components'


const Container = styled.div`
  width: 100vw;
  height: auto;
`
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  
`

const Practice = () => {
  const [wordlist, setWordlist] = useState([{}])
  
  useEffect(() => {
    const getWordlist = async () => {
        try {
            const res = await publicRequest.get('/wordlist')

            let sub_array = [];
            for (let i = 0; i < res.data.length; i++) {
                const obj = {
                    id: res.data[i]._id,
                    front: res.data[i].front,
                    back: res.data[i].back.join()
                };
                sub_array.push(obj);
              }
              setWordlist(sub_array);
        } catch {}
      }
    getWordlist()
  }, [])


  return (
    <Container>
      <Navbar />
      <Wrapper>
        {wordlist &&
          <FlashcardArray cards={wordlist} count={true} control={false} />
        }
      </Wrapper>
    </Container>
  )
}

export default Practice

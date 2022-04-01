import React, { useState, useEffect } from 'react'
import { publicRequest } from '../requestMethods';
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { FlashcardArray } from 'react-quizlet-flashcard';
import responsive from '../responsive'


const Container = styled.div`
  width: 100vw;
  height: auto;
`
const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  
`

// const Container = styled.div`
//   /* height: 100vh;
//   width: 100vw; */
//   /* max-width: 100%; */
// `
// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   max-width: 90%;
//   margin: 3rem auto;

//   /* position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%); */
// `
const Wordlist = styled.div`
  /* height: 60vh; */
  /* margin: 3rem auto; */
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  // font-size: 1.6rem;
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
      {/* <Wordlist> */}
        {wordlist &&
          <FlashcardArray cards={wordlist} count={true} control={false} />
        }
      {/* </Wordlist> */}
      </Wrapper>
    </Container>
  )
}

export default Practice

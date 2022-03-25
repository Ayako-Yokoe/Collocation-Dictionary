import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';

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
  const wordlist = useSelector(state => state.wordlist.wordlist)


  return (
    <Component>
      <Navbar />
      
      <Wrapper>
        <Wordlist>
          {/* <Word>word</Word>
          <Example>example sentence </Example>
          <Example>example sentence </Example>
          <Example>example sentence </Example> */}

          {wordlist}
          
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

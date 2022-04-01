import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import responsive from '../responsive'

//modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Container = styled.div`
  position: relative;
  height: 100vh;
`
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const Title = styled.h2`
  padding-bottom: 2rem;
  
    @media only screen and ${responsive.device.m}{
      padding-bottom: 2.5rem;
      font-size: 1.5rem;
    }
    @media only screen and ${responsive.device.l}{
      padding: 2rem 0 3rem 0;
      font-size: 2.5rem;
    }
    @media only screen and ${responsive.device.xl}{
      font-size: 2.6rem;
    }
`

const StartButton = styled.div`
  padding: 1rem 6rem;
  margin-bottom: 2rem;
  background-color: #FBDA61;
  background-image: linear-gradient(200deg, #FBDA61 0%, #FF5ACD 100%);
  box-shadow: 0 5px 5px #d3d3d3;
  border-radius: 60px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    box-shadow: none;
    transform: translateY(5px);
  }

    @media only screen and ${responsive.device.m}{
      padding: 1.5rem 6rem;
      font-size: 1.2rem;
    }
    @media only screen and ${responsive.device.l}{
      padding: 1.8rem 6rem;
      font-size: 1.5rem;
    }
    @media only screen and ${responsive.device.xl}{
      padding: 2rem 6rem;
      font-size: 1.6rem;
    }
`

const PracticeButton = styled.div`
  padding: 1rem 6rem;
  margin-bottom: 2rem;
  background-color: #FBDA61;
  background-image: linear-gradient(200deg, #FBDA61 0%, #FF5ACD 100%);
  box-shadow: 0 5px 5px #d3d3d3;
  border-radius: 60px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    box-shadow: none;
    transform: translateY(5px);
  }

  @media only screen and ${responsive.device.m}{
      padding: 1.5rem 6rem;
      font-size: 1.2rem;
  }
  @media only screen and ${responsive.device.l}{
      padding: 1.8rem 6rem;
      font-size: 1.5rem;
  }
  @media only screen and ${responsive.device.xl}{
      padding: 2rem 6rem;
      font-size: 1.6rem;
  }
` 
const QuizButton = styled.div`
  padding: 1rem 6rem;
  margin-bottom: 2rem;
  background-color: #FBDA61;
  background-image: linear-gradient(200deg, #FBDA61 0%, #FF5ACD 100%);
  box-shadow: 0 5px 5px #d3d3d3;
  border-radius: 60px;
  color: #fff;
  cursor: pointer;

  &:hover {
    box-shadow: none;
    transform: translateY(5px);
  }

  @media only screen and ${responsive.device.m}{
      padding: 1.5rem 6rem;
      font-size: 1.2rem;
  }
  @media only screen and ${responsive.device.l}{
      padding: 1.8rem 6rem;
      font-size: 1.5rem;
  }
  @media only screen and ${responsive.device.xl}{
      padding: 2rem 6rem;
      font-size: 1.6rem;
  }
` 
const BottomButton = styled.div`
  padding: 1rem 5rem;
  background-color: #FBDA61;
  background-image: linear-gradient(200deg, #FBDA61 0%, #FF5ACD 100%);
  box-shadow: 0 5px 5px #d3d3d3;
  border-radius: 60px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    box-shadow: none;
    transform: translateY(5px);
  }

  @media only screen and ${responsive.device.m}{
      padding: 1.5rem 5rem;
      font-size: 1.2rem;
  }
  @media only screen and ${responsive.device.l}{
      padding: 1.8rem 6rem;
      font-size: 1.5rem;
  }
  @media only screen and ${responsive.device.xl}{
      padding: 2rem 6rem;
      font-size: 1.6rem;
  }
`


const Home = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => setModalOpen(false)

  return (
    <Container>
      <Navbar />
      <Wrapper>

        <Title>Collocation Dictionary</Title>
        
        <Link to='/search'>
          <StartButton>START</StartButton>
        </Link>

        <Link to='/wordlist'>
          <PracticeButton >PRACTICE</PracticeButton>
        </Link>

        <Link to='/quiz'>
          <QuizButton>QUIZ</QuizButton>
        </Link>
      
        <BottomButton onClick={handleModalOpen}>HOW TO USE</BottomButton>
       
      </Wrapper>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Collocation Dictionary
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            A collocation is a group of two or more words often used together.
            You can search, practice, and test to improve your vocabulary.
            <br />
            <b>START</b>: Type Verb, Noun, or Adjective that you want to look up.
                          Add a collocation to a wordlist to practice later.
            <br />
            <b>PRACTICE</b>: Practice a collocation. Check its examples on the back of the flashcard.
            <br />
            <b>QUIZ</b>: Type a verb, noun, or adjective you want to test. Then, type as many collocations as you remember.
          </Typography>
        </Box>
      </Modal>
    </Container>
  )
}

export default Home


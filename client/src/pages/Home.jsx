import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
`
const TopButton = styled.div`
  /* margin: 3rem; */
  padding: 2rem;
  text-align: center;
  border: 1px solid gray;
  cursor: pointer;
`
const Middle = styled.div`
  display: flex;
  align-items: center;
`
const MiddleButton = styled.div`
  margin: 3rem;
  padding: 2rem;
  border: 1px solid gray;
  cursor: pointer;
` 
const Bottom = styled.div``
const BottomButton = styled.div`
  /* margin: 3rem; */
  padding: 1rem;
  text-align: center;
  border: 1px solid gray;
  cursor: pointer;
`


const Home = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => setModalOpen(false)
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <TopButton>START</TopButton>
        <Middle>
          <MiddleButton>PRACTICE</MiddleButton>
          <MiddleButton>QUIZ</MiddleButton>
        </Middle>
        <Bottom>
          <BottomButton onClick={handleModalOpen}>HOW TO USE</BottomButton>
        </Bottom>
      </Wrapper>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Container>
  )
}

export default Home


import React, { useState } from "react"
import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import Navbar from "../components/Navbar"
import {
  Container,
  Wrapper,
  Title,
  StartButton,
  PracticeButton,
  QuizButton,
  BottomButton,
} from "./Home.styles"

//modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width: {
    xs: 300,
    sm: 400,
  },
}

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => setModalOpen(false)

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Collocation Dictionary</Title>
        <Link to="/search">
          <StartButton>SEARCH</StartButton>
        </Link>
        <Link to="/wordlist">
          <PracticeButton>PRACTICE</PracticeButton>
        </Link>
        <Link to="/quiz">
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
            <b>START</b>: Type Verb, Noun, or Adjective that you want to look
            up. Add a collocation to a wordlist to practice later.
            <br />
            <b>PRACTICE</b>: Practice a collocation. Check its examples on the
            back of the flashcard.
            <br />
            <b>QUIZ</b>: Type a verb, noun, or adjective you want to test. Then,
            type as many collocations as you remember.
          </Typography>
        </Box>
      </Modal>
    </Container>
  )
}

export default Home

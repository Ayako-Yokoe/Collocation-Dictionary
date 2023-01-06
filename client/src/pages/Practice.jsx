import React, { useState, useEffect } from "react"
import { FlashcardArray } from "react-quizlet-flashcard"
import { publicRequest } from "../requestMethods"
import Navbar from "../components/Navbar"
import { Container, Wrapper } from "./Practice.styles"
import { extractEventHandlers } from "@mui/base"

const Practice = () => {
  const [wordlist, setWordlist] = useState([{}])

  useEffect(() => {
    const getWordlist = async () => {
      try {
        const res = await publicRequest.get("/wordlist")

        let sub_array = []
        for (let i = 0; i < res.data.length; i++) {
          const obj = {
            id: res.data[i]._id,
            front: res.data[i].front,
            back: res.data[i].back
              .join("")
              .replaceAll(" .", ".<br>")
              .replaceAll(" ?", "?<br>")
              .replaceAll(" !", "!<br>")
              .replaceAll(" ,", ",")
              .replaceAll(" '", "'")
              .replaceAll(" ;", ";"),
          }
          sub_array.push(obj)
        }
        setWordlist(sub_array)
      } catch (err) {
        console.log(err)
      }
    }
    getWordlist()
  }, [])

  return (
    <Container>
      <Navbar />
      <Wrapper>
        {wordlist && (
          <FlashcardArray cards={wordlist} count={true} control={false} />
        )}
      </Wrapper>
    </Container>
  )
}

export default Practice

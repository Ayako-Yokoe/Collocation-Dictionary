import React, { useState, forwardRef, useImperativeHandle } from "react"
import { Container, Compliment } from "./Snackbar.styles"

const Snackbar = forwardRef((props, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false)

  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true)
      setTimeout(() => {
        setShowSnackbar(false)
      }, 3000)
    },
  }))

  return (
    <Container visibility={showSnackbar ? "show" : "hide"}>
      <Compliment>
        {props.correct === true
          ? "Good work! You're learning fast!"
          : "Nice try! Try again"}
      </Compliment>
    </Container>
  )
})

export default Snackbar

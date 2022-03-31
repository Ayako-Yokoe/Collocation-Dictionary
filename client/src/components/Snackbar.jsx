import React, { useState, forwardRef, useImperativeHandle } from 'react'
import styled from 'styled-components'


const Container = styled.div`
    margin: 5rem auto;
    visibility: ${props => props.visibility === "show" ? "visible" : "hidden" };
`
const Compliment = styled.span`
    font-size: 3rem;
    text-align: center;
    background-color: pink;
    padding: 3rem;
    height: 30hv;
`

const Snackbar = forwardRef((props, ref) => {
    const [showSnackbar, setShowSnackbar] = useState(false)

    useImperativeHandle(ref, () => ({
        show() {
            setShowSnackbar(true)
            setTimeout(() => {
                setShowSnackbar(false)
            }, 3000)
        }
    }))

  return (
    <Container visibility={showSnackbar ? "show" : "hide"}>
        <Compliment>
            {props.correct === true 
            ? "Good work! You're learning fast!"
            : "Nice try! Try again"
            }
        </Compliment>  
    </Container>
  )
})

export default Snackbar

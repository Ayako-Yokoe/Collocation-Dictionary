import React, { useState, forwardRef, useImperativeHandle } from 'react'
import styled from 'styled-components'


const Container = styled.div`
    margin: 5rem auto;
    visibility: ${props => props.visibility === "show" ? "visible" : "hidden" };
`
const Compliment = styled.span`
    font-size: 2rem;
    color: #000;
    text-align: center;
    background-color: #85FFBD;
    background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
    padding: 3rem;
    border-radius: 30px;
    height: 30hv;
    letter-spacing: 2px;
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

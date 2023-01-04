import styled from "styled-components"
import responsive from "../responsive"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  margin: 5rem auto 1rem auto;

  @media only screen and ${responsive.device.m} {
    flex-direction: row;
  }
`
export const SearchField = styled.div`
  flex: 1;
  text-align: center;
  width: 100%;
`
export const InputField = styled.input`
  padding: 0.5rem 0.1rem 0.5rem 1rem;
  font-size: 1rem;
  width: 60%;
  outline: none;
  border: 1px solid #c0c0c0;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;

  @media only screen and ${responsive.device.m} {
    font-size: 1rem;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 1.3rem;
    letter-spacing: 2px;
  }
  @media only screen and ${responsive.device.xl} {
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
  }
`
export const Button = styled.button`
  padding: 0.5rem 0.7rem 0.5rem 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  border: 1px solid #c0c0c0;
  border-radius: 3px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  color: #fff;

  @media only screen and ${responsive.device.m} {
    font-size: 1rem;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 1.3rem;
    letter-spacing: 2px;
  }
  @media only screen and ${responsive.device.xl} {
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
  }
`
export const SearchWord = styled.p`
  font-size: 1.2rem;
  letter-spacing: 2px;
  padding: 1.5rem 1rem;
  text-align: start;

  @media only screen and ${responsive.device.m} {
    padding: 2rem 1rem;
  }
  @media only screen and ${responsive.device.m} {
    font-size: 1rem;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 1.3rem;
    letter-spacing: 2px;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 1.5rem;
  }
`
export const TestWord = styled.span`
  font-weight: 500;
  padding-left: 0.8rem;
  letter-spacing: 2px;
`
export const AnswerField = styled.div`
  flex: 2;
  text-align: center;
  width: 100%;
`
export const ResetButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  letter-spacing: 2px;
  cursor: pointer;
  position: fixed;
  bottom: 40px;
  left: 35%;
  background-color: #0093e9;
  background-image: linear-gradient(0deg, #0093e9 0%, #80d0c7 100%);
  border: 1px solid #c0c0c0;
  border-radius: 3px;
  color: #fff;

  @media only screen and ${responsive.device.m} {
    left: 45%;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 1.3rem;
    letter-spacing: 2px;
  }
  @media only screen and ${responsive.device.xl} {
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
  }
`

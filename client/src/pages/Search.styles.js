import styled from "styled-components"
import responsive from "../responsive"

export const Container = styled.div`
  width: 100vw;
  height: auto;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Top = styled.div`
  margin: 2rem auto 2rem auto;
  text-align: center;

  @media only screen and ${responsive.device.m} {
    margin: 4rem auto 3rem auto;
    width: 60%;
  }
  @media only screen and ${responsive.device.xl} {
    width: 40%;
  }
`
export const SearchInput = styled.input`
  padding: 0.5rem 0.1rem 0.5rem 0.8rem;
  font-size: 1rem;
  letter-spacing: 2px;
  outline: none;
  border: 1px solid #c0c0c0;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  width: 70%;

  @media only screen and ${responsive.device.s} {
    padding: 0.5rem 0.1rem 0.5rem 1rem;
    font-size: 1.2rem;
  }
  @media only screen and ${responsive.device.m} {
    padding: 0.8rem 0.1rem 0.8rem 1rem;
    font-size: 0.9rem;
  }
  @media only screen and ${responsive.device.l} {
    padding: 0.8rem 0.1rem 0.8rem 1.2rem;
    font-size: 1.2rem;
  }
  @media only screen and ${responsive.device.xl} {
    padding: 0.8rem 0.1rem 0.8rem 1.4rem;
    font-size: 1.4rem;
  }
`
export const SearchButton = styled.button`
  padding: 0.5rem 0.7rem 0.5rem 0.5rem;
  font-size: 1rem;
  letter-spacing: 2px;
  outline: none;
  border: 1px solid #c0c0c0;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 30%;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  color: #fff;

  @media only screen and ${responsive.device.s} {
    font-size: 1.2rem;
  }
  @media only screen and ${responsive.device.m} {
    padding: 0.8rem 1rem 0.8rem 0.8rem;
    font-size: 0.9rem;
  }
  @media only screen and ${responsive.device.l} {
    padding: 0.8rem;
    font-size: 1.2rem;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 1.4rem;
  }
`
export const Bottom = styled.div`
  max-width: 80%;
  background-color: #fff;
  @media only screen and ${responsive.device.l} {
    max-width: 70%;
  }
`
export const Results = styled.ul`
  margin: 1rem;
  list-style: none;
`
export const Collocation = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;

  @media only screen and ${responsive.device.s} {
    font-size: 1.4rem;
  }
  @media only screen and ${responsive.device.m} {
    font-size: 1.2rem;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 1.6rem;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 1.8rem;
  }
`
export const AddButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.3rem;
  font-size: 0.8rem;
  letter-spacing: 2px;
  cursor: pointer;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  border: 1px solid #c0c0c0;
  border-radius: 3px;
  color: #fff;
  visibility: ${(props) => (props.isSearch === "" ? "hidden" : "visible")};

  @media only screen and ${responsive.device.l} {
    font-size: 1.2rem;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 1.4rem;
  }
`
export const Examples = styled.li`
  font-size: 1rem;
  letter-spacing: 2px;
  line-height: 1.4;

  @media only screen and ${responsive.device.s} {
    font-size: 1.2rem;
  }
  @media only screen and ${responsive.device.m} {
    font-size: 1rem;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 1.4rem;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 1.6rem;
  }
`

import styled from "styled-components"
import responsive from "../responsive"

export const Container = styled.div`
  height: 100vh;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 60%;
  margin: 50px auto;

  @media only screen and ${responsive.device.l} {
    width: 45%;
  }
`
export const Title = styled.h2`
  padding-bottom: 2rem;

  @media only screen and ${responsive.device.m} {
    padding-bottom: 2.5rem;
    font-size: 1.5rem;
  }
  @media only screen and ${responsive.device.l} {
    padding: 2rem 0 3rem 0;
    font-size: 2.5rem;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 2.6rem;
  }
`
export const MenuButton = styled.div`
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  background-color: #fbda61;
  background-image: linear-gradient(200deg, #fbda61 0%, #ff5acd 100%);
  box-shadow: 0 5px 5px #d3d3d3;
  border-radius: 60px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    box-shadow: none;
    transform: translateY(5px);
  }

  @media only screen and ${responsive.device.m} {
    padding: 1.5rem 6rem;
    font-size: 1.2rem;
  }
  @media only screen and ${responsive.device.l} {
    padding: 1.8rem 6rem;
    font-size: 1.5rem;
  }
  @media only screen and ${responsive.device.xl} {
    padding: 2rem 6rem;
    font-size: 1.6rem;
  }
`

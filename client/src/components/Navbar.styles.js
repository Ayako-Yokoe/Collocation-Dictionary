import styled from "styled-components"
import responsive from "../responsive"

export const Container = styled.div`
  height: auto;
  color: #fff;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Left = styled.div`
  margin: 1rem;
  @media only screen and ${responsive.device.s} {
    margin: 2rem;
  }
`
export const Logo = styled.span`
  font-size: 20px;
  padding: 20px;
  @media only screen and ${responsive.device.s} {
    font-size: 25px;
  }
  @media only screen and ${responsive.device.m} {
    font-size: 28px;
  }
  @media only screen and ${responsive.device.l} {
    font-size: 32px;
  }
  @media only screen and ${responsive.device.xl} {
    font-size: 40px;
  }
`

export const Right = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const List = styled.ul`
  list-style: none;
`
export const ListItem = styled.li`
  display: none;

  @media only screen and ${responsive.device.m} {
    list-style: none;
    display: inline-block;
    padding: 2rem 1rem;
    font-size: 1.2rem;
    color: #fff;
    font-weight: 700;
    letter-spacing: 2px;
    transition: 0.5s ease;

    &:hover {
      cursor: pointer;
      color: gray;
    }

    @media only screen and ${responsive.device.l} {
      font-size: 1.6rem;
    }
    @media only screen and ${responsive.device.xl} {
      font-size: 2.2rem;
      padding: 4rem 2rem;
    }
  }
`
export const HamburgerMenu = styled.div`
  visibility: visible;
  margin: 1rem;
  display: block;
  cursor: pointer;

  @media only screen and ${responsive.device.m} {
    visibility: hidden;
  }
`

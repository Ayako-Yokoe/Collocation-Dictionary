import styled from "styled-components"
import responsive from "../responsive"

export const Container = styled.div`
  margin: 5rem auto;
  visibility: ${(props) =>
    props.visibility === "show" ? "visible" : "hidden"};
`
export const Compliment = styled.span`
  color: #000;
  text-align: center;
  background-color: #85ffbd;
  background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
  font-size: 0.8rem;
  padding: 1rem;
  border-radius: 30px;
  height: auto;

  @media only screen and ${responsive.device.m} {
    font-size: 2rem;
    padding: 3rem;
    height: 30hv;
    letter-spacing: 2px;
  }
`

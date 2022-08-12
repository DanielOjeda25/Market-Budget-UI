import styled from 'styled-components'
import { Variables } from '../../Global.styled'
import { devices } from '../../responsive-media'
const Container = styled.div`
  height: 60vh;
  background-color: ${Variables.lightColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 5.625rem;
  margin-bottom: 1.25rem;
  font-family: ${Variables.Fontfamily};
  @media ${devices.mobileS}{
    font-size: 3.125rem;
  }
`
const Description = styled.div`
  font-size: 2.5em;
  font-weight: 200;
  font-family: ${Variables.Fontfamily};
  margin-bottom: 1.25rem;
  text-transform: capitalize;
  @media ${devices.mobileS} {
    text-align: center;
    font-size: 2em;
  }
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  border-radius: 0.3125rem;
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  @media ${devices.mobileS} {
    width: 80%;
  }
`
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: ${Variables.greenColor};
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${Variables.lightRedColor};
  }
`

export { Container, Title, Description, InputContainer, Input, Button }

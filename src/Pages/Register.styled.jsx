import styled from 'styled-components'
import { devices } from '../responsive-media'
/**
 * !Elementos del Login
 */

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5fbfd;
  display: flex;
  align-items: center;
  justify-content: center;
`

/**
 * !Elementos del Registro
 */

const ContainerRegistro = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5fbfd;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  @media ${devices.mobileS} {
    width: 75%;
  }
`
const WrapperLogin = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  @media ${devices.mobileS} {
    width: 75%;
  }
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`
const InputLogin = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`
const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`
export {
  Container,
  ContainerRegistro,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
  FormLogin,
  WrapperLogin,
  Link,
  InputLogin,
}

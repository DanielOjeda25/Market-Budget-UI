import styled from 'styled-components'
import { devices } from '../responsive-media'
import { Variables } from '../Global.styled'
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
  box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.27);
  -webkit-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.27);
  -moz-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.27);
  @media ${devices.mobileS} {
    width: 75%;
  }
  @media ${devices.laptop} {
    width: 50%;
  }
`
const WrapperLogin = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.27);
  -webkit-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.27);
  -moz-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.27);
  @media ${devices.mobileS} {
    width: 75%;
  }
  @media ${devices.laptop} {
    width: 50%;
  }
`
const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  text-transform: capitalize;
  font-family: ${Variables.Fontfamily};
  font-weight: 600;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
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
  border-radius: 5px;
`
const InputLogin = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;
  text-transform: uppercase;
  font-family: ${Variables.Fontfamily};
  font-weight: 600;
  &:hover {
    background-color: #0f4c75;
  }
`
const Linka = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
`
export {
  Container,
  ContainerRegistro,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  FormLogin,
  WrapperLogin,
  Linka,
  InputLogin,
}

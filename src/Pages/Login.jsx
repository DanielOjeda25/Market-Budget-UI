import {
  Container,
  WrapperLogin,
  Title,
  FormLogin,
  Button,
  Linka,
  InputLogin
} from './Register.styled'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <Container>
      <WrapperLogin>
        <Title>Sign in</Title>
        <FormLogin>
          <InputLogin placeholder='Username' />
          <InputLogin placeholder='Password' />
          <Button>LOGIN</Button>
          <Linka>DO NOT YOU REMEBER THE PASSWORD?</Linka>
          <Linka><Link to='/register' style={{textDecoration: 'none', color: 'dark'}}>CREATE A NEW ACCOUNT</Link></Linka>
        </FormLogin>
      </WrapperLogin>
    </Container>
  )
}

export default Login

import {
  Container,
  WrapperLogin,
  Title,
  FormLogin,
  Button,
  Link,
  InputLogin
} from './Register.styled'

const Login = () => {
  return (
    <Container>
      <WrapperLogin>
        <Title>Sign in</Title>
        <FormLogin>
          <InputLogin placeholder='Username' />
          <InputLogin placeholder='Password' />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </FormLogin>
      </WrapperLogin>
    </Container>
  )
}

export default Login

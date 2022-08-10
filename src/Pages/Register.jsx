import {
  ContainerRegistro,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
} from './Register.styled'

const Register = () => {
  return (
    <ContainerRegistro>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder='Name' />
          <Input placeholder='Last Name' />
          <Input placeholder='Username' />
          <Input placeholder='Email' />
          <Input placeholder='Password' />
          <Input placeholder='Confirm Password' />
          <Agreement>LOREM TEXTO PARA RELLENAR QUE FUE ESA as dsadasdasdass?</Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </ContainerRegistro>
  )
}

export default Register

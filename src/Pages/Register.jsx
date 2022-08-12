import {
  ContainerRegistro,
  Wrapper,
  Title,
  Form,
  Input,
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
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </ContainerRegistro>
  )
}

export default Register

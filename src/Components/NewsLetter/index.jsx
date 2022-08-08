import React from 'react'
import { Container, Title, Description, InputContainer, Input, Button } from './New.styled'
import SendIcon from '@mui/icons-material/Send';

const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder='Your email'/>
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter

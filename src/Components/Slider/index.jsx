import React, { useState, useEffect } from 'react'

import { sliderItems } from './data'
import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImageContainer,
  Info,
  Image,
  Title,
  Desc,
  Button,
} from './Slider.styled'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }
  
  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowBackIosIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {
          sliderItems.map((item) => 
          (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} alt='producto' />
            </ImageContainer>
            <Info>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </Info>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  )
}

export default Slider

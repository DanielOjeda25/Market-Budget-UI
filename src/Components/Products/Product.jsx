import React from 'react'
import { Container, Circle, Image, Info, Icon } from './Products.styled'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const Product = ({ i }) => {
  return (
    <Container>
      <Circle />
      <Image src={i.img} />
      <Info>
        <Icon>
          <ShoppingCartIcon />
        </Icon>
        <Icon>
          <SearchIcon />
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product

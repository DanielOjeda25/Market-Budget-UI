import React from 'react'
import { ContainerItem, Info, Image, Title, Button } from './Categories.styled'
import { Link } from 'react-router-dom'

const CategoryItem = ({ i }) => {
  return (
    <>
      <ContainerItem>
        <Image src={i.img} />
        <Info>
          <Title>{i.title}</Title>
          <Button><Link to='/products' style={{textDecoration: 'none', color: 'gray'}}>SHOP NOW</Link></Button>
        </Info>
      </ContainerItem>
    </>
  )
}

export default CategoryItem

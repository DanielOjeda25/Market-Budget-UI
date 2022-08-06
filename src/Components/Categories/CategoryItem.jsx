import React from 'react'
import { ContainerItem, Info, Image, Title, Button } from './Categories.styled'

const CategoryItem = ({ i }) => {
  return (
    <>
      <ContainerItem>
        <Image src={i.img} />
        <Info>
          <Title>{i.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </ContainerItem>
    </>
  )
}

export default CategoryItem

import React from 'react'
import { ContainerI } from './Products.styled'
import { popularProducts } from '../Slider/data'
import Product from './Product'

const Products = () => {
  return (
    <ContainerI>
      {popularProducts.map((i) => (
        <Product i={i} key={i.id}/>
      ))}
    </ContainerI>
  )
}

export default Products

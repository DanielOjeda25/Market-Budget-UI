import React from 'react'
import { ContainerCategories } from './Categories.styled'
import { categories } from '../Slider/data'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <ContainerCategories>
      {categories.map((i) => (
        <CategoryItem i={i} key={i.id}/>
      ))}
    </ContainerCategories>
  )
}

export default Categories

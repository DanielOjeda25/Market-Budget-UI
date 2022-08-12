import React from 'react'
import Navbar from '../Components/NavBar'
import Announcement from '../Components/NavBar/indexAnnouncement'
import Newsletter from '../Components/NewsLetter'
import Footer from '../Components/Footer'
import img from '../assets/jacket.png'
import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  Amount,
  AmountContainer,
  Button
} from './ProductPage.styled'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductPage = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={img} />
        </ImgContainer>
        <InfoContainer>
          <Title>Laptop</Title>
          <Desc>Laptop for be a Programmer</Desc>
          <Price> $1200</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='darkblue' />
              <FilterColor color='gray' />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductPage

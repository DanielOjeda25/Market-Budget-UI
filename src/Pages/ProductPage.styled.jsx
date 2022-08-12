import styled from 'styled-components'
import { Variables } from '../Global.styled'
import { devices } from '../responsive-media'

const Container = styled.div`
  font-family: ${Variables.Fontfamily};
`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media ${devices.mobileS}{
    padding: 10px;
    flex-direction: column;
  }
  @media ${devices.laptop}{
    padding: 50px;
    flex-direction: row;
  }
`
const ImgContainer = styled.div`
  flex: 1;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  @media ${devices.mobileS}{
    padding: 10px;
  }
  @media ${devices.laptop}{
    padding: 0px 50px;
  }
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  @media ${devices.mobileS}{
    height: 40vh;
  }
  @media ${devices.laptop}{
    height: 90vh;
  }
`
const Title = styled.h1`
  font-weight: 200;
`
const Desc = styled.p`
  margin: 20px 0px;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
  @media ${devices.mobileS}{
    width: 100%;
  }
  @media ${devices.laptop}{
    width: 50%;
  }
`
const Filter = styled.div`
  display: flex;
  align-item: center;
`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${devices.mobileS}{
    width: 100%;
  }
  @media ${devices.laptop}{
    width: 50%;
  }
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`
const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500px;
  border-radius: 10px;
  font-weight: 500;
  &:hover {
    background-color: ${Variables.greenColor};
  }
`

export {
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
  Button,
}

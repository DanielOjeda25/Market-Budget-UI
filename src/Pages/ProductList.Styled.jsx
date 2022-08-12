import styled from 'styled-components'
import { Variables } from '../Global.styled'
import { devices } from '../responsive-media'
const Container = styled.div`
  font-family: ${Variables.Fontfamily};
`
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  @media ${devices.mobileS} {
    margin-right: 0px;
  }
  @media ${devices.laptop} {
    margin-right: 20px;
  }
`
const Filter = styled.div`
  margin: 1.25rem;
  @media ${devices.mobileS} {
    margin: 0rem 1.25rem;
  }
  @media ${devices.laptop} {
    margin: 1.25rem;
  }
`

const Select = styled.select`
  padding: .625rem;
  margin-left: 1.25rem;
  @media ${devices.mobileS} {
    margin-left: .625rem 0rem;
  }
  @media ${devices.laptop} {
    margin-left: 1.25rem;
  }
`
const Option = styled.option``
export { Container, Title, FilterContainer, Filter, FilterText, Option, Select }

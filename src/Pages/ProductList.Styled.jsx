import styled from 'styled-components'
import { Variables } from '../Global.styled'

const Container = styled.div``
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
`
const Filter = styled.div`
  margin: 20px;
`

const Select = styled.select`
  padding: 10px;
  margin-left: 20px;

`
const Option = styled.option``
export { Container, Title, FilterContainer, Filter, FilterText, Option, Select }

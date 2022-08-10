import styled from 'styled-components'
import { Variables } from '../Global.styled'
import { mobile } from '../responsive-media'

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
  ${mobile({ margin: '0px' })}
`
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: ' 0px 20px', display: 'flex', flexDirection: 'column' })}
`

const Select = styled.select`
  padding: 10px;
  margin-left: 20px;
  ${mobile({ margin: '5px 0px' })}
`
const Option = styled.option``
export { Container, Title, FilterContainer, Filter, FilterText, Option, Select }

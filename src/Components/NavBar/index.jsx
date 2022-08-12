import React from 'react'
import {
  ContainerNav,
  Wrapper,
  Left,
  Right,
  Center,
  SearchContainer,
  Input,
  MenuItem,
  Logo,
} from './Navbar.styled'

import { Search } from '@mui/icons-material'
import { Badge } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import StorefrontIcon from '@mui/icons-material/Storefront'

const Navbar = () => {
  return (
    <ContainerNav>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search
              style={{ color: 'gray', fontSize: 20, cursor: 'pointer' }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            Market Budget
          </Logo>
        </Center>
        <Right>
          <MenuItem href='/'>Register</MenuItem>
          <MenuItem href='/'>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color='primary'>
              <ShoppingCartOutlinedIcon color='action' />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </ContainerNav>
  )
}

export default Navbar

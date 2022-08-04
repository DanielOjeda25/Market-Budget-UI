import { Search } from '@mui/icons-material'
import { Badge } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import React from 'react'
import { ContainerNav, Wrapper, Left, Right, Center, Language, SearchContainer, Input, Logo,MenuItem } from './Navbar.styled'
const Navbar = () => {
  return (
    <ContainerNav>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{color: 'gray', fontSize: 16}}/>
          </SearchContainer>
        </Left>
        <Center><Logo>Market Budget</Logo></Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </ContainerNav>
  )
}

export default Navbar
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
import './styles.css'
import { Link } from 'react-router-dom'
import { Search } from '@mui/icons-material'
import { Badge } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

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
          <Logo><Link to='/' style={{textDecoration: 'none'}}>Market Budget</Link></Logo>
        </Center>
        <Right>
          <Link className='link' to='/register'>Register</Link>
          <Link to='/login' className='link'>Sign In</Link>
          <Link className='link' to='/cart'>
            <Badge badgeContent={1} color='primary'>
              <ShoppingCartOutlinedIcon color='action' />
            </Badge>
          </Link>
        </Right>
      </Wrapper>
    </ContainerNav>
  )
}

export default Navbar

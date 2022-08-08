import React from 'react'
import {
  Container,
  Left,
  Right,
  Center,
  Logo,
  Description,
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
} from './Footer.styled'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LanguageIcon from '@mui/icons-material/Language'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import logo from '../../assets/MarketBudget.png'
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo src={logo}></Logo>
        <Description>Daniel Alejandro Ojeda | Frontend Developer</Description>
        <SocialContainer>
          <SocialIcon color={'00acee'}>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color={'0072b1'}>
            <LinkedInIcon />
          </SocialIcon>
          <SocialIcon color={'000'}>
            <LanguageIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man/Woman Fashion</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Term</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{ marginRight: '10px' }} /> Posadas Misiones
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{ marginRight: '10px' }} />
          +54 3764656272
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: '10px' }} />
          ojedadanielalejandro333@gmail.com
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  )
}

export default Footer

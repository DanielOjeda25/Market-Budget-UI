import styled from 'styled-components'
import { Variables } from '../../Global.styled'
import {devices} from '../../responsive-media'
const Container = styled.div`
  display: flex;
  background-color: #bdc1c6;
  color: ${Variables.lightColor};
  @media ${devices.mobileS}{
    flex-direction: column;
  }
  @media ${devices.laptop}{
    display: flex;
    flex-direction: row;
  }
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
`
const Center = styled.div`
  flex: 1;
  padding: 1.25rem;
  @media ${devices.mobileS}{
    display: none;
  }
  @media ${devices.laptop}{
    display: flex;
    padding: 1.25rem;
    flex-direction: column;
  }
`

const Logo = styled.img`
  height: 96px;
  width: 96px;
  margin-left: .625rem;
`
const Title = styled.h3`
  margin-bottom: 1.875rem;
  text-transform: uppercase;
  letter-spacing: .0625rem;
  font-family: ${Variables.Fontfamily};

  &:first-letter {
    color: ${Variables.greenColor};
  }
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.2rem;  
  @media ${devices.laptop}{
    flex-direction: column;
  }
`
const ListItem = styled.li`
  font-family: ${Variables.Fontfamily};
  width: 50%;
  margin-bottom: .625rem;

  &:first-letter {
    color: ${Variables.greenColor};
  }
  &:hover {
    color: ${Variables.lightRedColor};
    cursor: pointer;
  }
  
`
const Description = styled.div`
  margin: 1.25rem 0rem;
  font-size: 1.2rem;
  font-family: ${Variables.Fontfamily};
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.25rem;
  transition: all .5s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`
const ContactItem = styled.div`
  margin-bottom: 1.25rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  font-family: ${Variables.Fontfamily};
`

const Payment = styled.img`
  width: 50%;`

export {
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
}

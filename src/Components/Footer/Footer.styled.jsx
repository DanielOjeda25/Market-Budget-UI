import styled from 'styled-components'
import { Variables } from '../../Global.styled'
const Container = styled.div`
  display: flex;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Right = styled.div`
  flex: 1;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const Logo = styled.img`
  height: 5rem;
  width: 5rem;
  margin-left: 10px;
`
const Title = styled.h3`
  margin-bottom: 30px;
  font-family: ${Variables.Fontfamily};
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  font-family: ${Variables.Fontfamily};
  width: 50%;
  margin-bottom: 10px;
`
const Description = styled.div`
  margin: 20px 0px;
  font-family: ${Variables.Fontfamily};
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
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

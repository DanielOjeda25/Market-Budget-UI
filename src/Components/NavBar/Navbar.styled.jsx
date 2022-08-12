import styled from 'styled-components'
import { Variables } from '../../Global.styled'
import { devices } from '../../responsive-media'
/**
 * !Container general
 */
const ContainerNav = styled.div`
  height: 3.75rem;
  font-family: ${Variables.Fontfamily};
  @media ${devices.mobileM} {
    height: 3.5rem;
  }
  @media ${devices.tablet}{
    height: 3rem;
  }
  @media screen and (max-width: 320px) {
    height: 3rem;
  }
  
  
`
/**
 * !Wrapper
 */
const Wrapper = styled.div`
  padding: 0.625rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${devices.mobileS} {
    padding: 0 0;
  }
  @media ${devices.mobileM} {
   padding: 5px 0px;
  }
  @media ${devices.mobileL} {
    padding: 5px 5px;
  }
  @media ${devices.tablet} {
    padding: 2px 0px;
  }
`
/**
 * *Sepators
 */
/**Left Elements */
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media ${devices.mobileS} {
    display: none;
  }
  @media ${devices.mobileM} {
   display: flex;
   flex: 2;
  }
  @media ${devices.laptop}{
    display: flex;
    flex: 1;
  }
`

const Input = styled.input`
  border: none;
  height: 2rem;
  width: 100%;
  margin: 2px;
  font-family: ${Variables.Fontfamily};
`
const SearchContainer = styled.div`
  border: 0.0313rem solid ${Variables.GrayColor};
  display: flex;
  width: 70%;
  align-items: center;
  margin-left: 1.5625rem;
  box-sizing: border-box;
  border-radius: 4px;
  @media ${devices.mobileS} {
    display: none;
  }
  @media ${devices.mobileM} {
    display: flex;
    width: 100%;
  }
  @media ${devices.laptop}{
    width: 70%;
  }
`
/**Center Elements */
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  @media ${devices.mobileS} {
    flex: 2;
  }
  @media ${devices.mobileM} {
    flex: 1;
  }
  @media ${devices.mobileL}{
    display: none;
  }
  @media ${devices.tablet}{
    display: flex;
  }
  @media ${devices.laptop}{
    flex: 1;
  }
`
const Logo = styled.h1`
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-shadow: 3px 2px 1px rgba(0, 0, 0, 0.2);
  &::first-letter {
    color: red;
  }
  @media ${devices.mobileS} {
    font-size: .9rem;
  }
  @media ${devices.mobileM} {
    font-size: 1rem;
    padding: 0 2px;
  }
  @media ${devices.mobileM} {
    font-size: .9rem;
    padding: 0 2px;
  }
  @media ${devices.tablet} {
    font-size: 1rem;
    padding: 0 2px;
  }
  @media ${devices.laptop} {
    font-size: 1.5rem;
    padding: 0 2px;
  }
`

/**Right Elements */
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media ${devices.mobileS} {
    justify-content: center;
    flex: 2;
  }
  @media ${devices.mobileM} {
    justify-content: flex-end;
    flex: 1;
  }
  @media ${devices.mobileL} {
    justify-content: flex-start;
    flex: 2;
  }
  @media ${devices.tablet} {
    justify-content: center;
    flex: 1;
    width: 100%;
  }
  @media ${devices.laptop} {
    justify-content: flex-end;
    flex: 1;

  }
`
const MenuItem = styled.a`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weigth: bold;
  cursor: pointer;
  text-decoration: none;
  margin-left: 1.5625rem;
  box-shadow: inset 0 0 0 0 ${Variables.greenColor};
  color: ${Variables.greenColor};
  margin: 0 -0.25rem;
  padding: 0 4px;
  margin: 0.625rem;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border-radius: 5px;

  &:hover {
    box-shadow: inset 110px 0 0 0 ${Variables.lightRedColor};
    color: white;
  }
  @media ${devices.mobileS} {
    font-size: 0.75rem;
    margin-left: 10px;
    font-weight: 600;
  }
  @media ${devices.mobileM} {
    font-size: 0.7rem;
  }
  @media ${devices.laptop} {
    font-size: 1.2rem;
  }
`
const AnnouncementDiv = styled.div`
  font-size: 0.7rem;
  height: 1.25rem;
  background-color: ${Variables.greenColor};
  font-family: ${Variables.Fontfamily};
  color: ${Variables.lightColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  padding: 0.625rem 1.25rem;
  text-transform: capitalize;
  position: relative;
  overflow: hidden;
  @media ${devices.mobileS} {
    display: none;
  }
  @media ${devices.tablet} {
    display: flex;
  }
`

export {
  ContainerNav,
  Wrapper,
  Left,
  Right,
  Center,
  SearchContainer,
  Input,
  MenuItem,
  AnnouncementDiv,
  Logo,
}

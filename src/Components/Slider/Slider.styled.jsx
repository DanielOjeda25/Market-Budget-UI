import styled from 'styled-components'
import { Variables } from '../../Global.styled'
import { devices } from '../../responsive-media'
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  @media ${devices.mobileS} {
    display: none;
  }
  @media ${devices.tablet} {
    display: flex;
    width: 100%;
  }
  
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  @media ${devices.tablet} {
  }
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
  @media ${devices.tablet} {
    height: 100%;
  }
`

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  @media ${devices.tablet} {
    height: 100vh;
    width: 100vw;
  }
`
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
  @media ${devices.tablet} {
    height: 100%;
    flex: 2;
  }
`

const Image = styled.img`
  height: 100%;
  @media ${devices.tablet} {
    height: 100%;
    width: 100%;
  }
  @media ${devices.laptop} {
    width: 100%;
  }
`
const Info = styled.div`
  flex: 1;
  padding: 50px;
  @media ${devices.tablet} {
    padding: .3125rem;
    flex: 0;
  }
  @media ${devices.laptop}{
    padding: 50px;
    flex: 1; 
  }
`
const Title = styled.h1`
  font-size: 4.375rem;
  font-family: ${Variables.Fontfamily};
  @media ${devices.tablet} {
    font-size: 2.5rem;
  }
  @media ${devices.laptop}{
    font-size: 4.375rem; 
  }
`
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 1.875rem;
  font-weight: 500;
  letter-spacing: 0.1875rem;
  text-transform: uppercase;
  font-family: ${Variables.Fontfamily};
  @media ${devices.tablet} {
    font-size: .9375rem;
    letter-spacing: .125rem;
  }
  @media ${devices.laptop}{
    font-size: 1.875rem;
    letter-spacing: 0.1875rem; 
  }
`
const Button = styled.button`
  padding: 10px;
  font-family: ${Variables.Fontfamily};
  font-weight: 500;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
  transition: all 0.5s ease;
  border-radius: 5px;
  &:hover {
    background-color: ${Variables.darkColor};
    color: ${Variables.lightColor};
  }
  @media ${devices.tablet} {
    font-size: 1rem;
  }
  @media ${devices.laptop}{
    font-size: 1.25rem;
  }
`
export {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImageContainer,
  Info,
  Image,
  Title,
  Desc,
  Button,
}

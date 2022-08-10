import styled from 'styled-components'
import { Variables } from '../../Global.styled'
import { mobile } from '../../responsive-media'
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
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
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 80%;
`
const Info = styled.div`
  flex: 1;
  padding: 50px;
`
const Title = styled.h1`
  font-size: 4.375rem;
  font-family: ${Variables.Fontfamily};
`
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 1.875rem;
  font-weight: 500;
  letter-spacing: 0.1875rem;
  font-family: ${Variables.Fontfamily};
`
const Button = styled.button`
  padding: 10px;
  font-family: ${Variables.Fontfamily};
  font-weight: 500;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
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

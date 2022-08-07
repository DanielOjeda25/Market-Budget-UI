import styled from 'styled-components'
import { Variables } from '../../Global.styled'

/**
 * !Container Product.jsx
 */

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`
const Container = styled.div`
  flex: 1;
  margin: 0.3125rem;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Variables.GrayColor};
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${Variables.lightColor};
  position: absolute;
`
const Image = styled.img`
  height: 50%;
  z-index: 2;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${Variables.lightColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.3125rem;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${Variables.greenColor};
    transform: scale(1.1);
  }
`
/*
 * !Container index.jsx
 */
const ContainerI = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export { Container, ContainerI, Circle, Image, Info, Icon }

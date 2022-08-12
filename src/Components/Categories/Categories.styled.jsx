import styled from 'styled-components'
import { Variables } from '../../Global.styled'
import { devices } from '../../responsive-media'

/**
 * !Este container es para el CategoryItem.jsx
 */
const ContainerItem = styled.div`
  flex: 1;
  margin: 0.1875rem;
  height: 70vh;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media ${devices.mobileS}{
    height: 30vh;
  }
  @media ${devices.laptop}{
   height: 100%;
  }
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  font-family: ${Variables.Fontfamily};
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: #fefefe;
  margin-bottom: 1.25rem;
  @media ${devices.mobileS}{
    font-size: 2rem;
  }
`
const Button = styled.button`
  font-family: ${Variables.Fontfamily};
  border: none;
  padding: 0.625rem;
  background-color: ${Variables.lightColor};
  color: gray;
  cursor: pointer;
  font-weight: 600;
  border-radius: 0.25rem;
  transition: all 0.7s ease;
  &:hover{
    color: ${Variables.lightColor};	
    background-color: ${Variables.darkColor};
  }
`

/**
 * !Este container es para Category Index
 */
const ContainerCategories = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  @media ${devices.mobileM}{
    padding: 0px;
    flex-direction: column;
  }
  @media ${devices.laptop}{
    flex-direction: row;
  }
 
`

export { ContainerItem, ContainerCategories, Image, Info, Title, Button }

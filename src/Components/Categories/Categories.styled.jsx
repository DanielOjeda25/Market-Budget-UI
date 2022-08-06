import styled from 'styled-components'
import { Variables } from '../../Global.styled'

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
  color: ${Variables.lightColor};
  margin-bottom: 1.25rem;
`
const Button = styled.button`
  font-family: ${Variables.Fontfamily};
  border: none;
  padding: 0.625rem;
  background-color: ${Variables.lightColor};
  color: gray;
  cursor: pointer;
  font-weight: 600;

`

/**
 * !Este container es para Category Index
 */
const ContainerCategories = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`

export { ContainerItem, ContainerCategories, Image, Info, Title, Button }

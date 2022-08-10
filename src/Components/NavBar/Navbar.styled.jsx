import styled from 'styled-components'
import { Variables } from '../../Global.styled'
import { mobile } from '././../../responsive-media'
/**
 * !Container general
 */
const ContainerNav = styled.div`
  height: 3.75rem;
  font-family: ${Variables.Fontfamily};
  ${mobile({ height: '50px' })}
`
/**
 * !Wrapper
 */
const Wrapper = styled.div`
  padding: 0.625rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: '10px 0px' })}
`
/**
 * *Sepators
 */
/**Left Elements */
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 0.875rem;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`
const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`
const SearchContainer = styled.div`
  border: 0.0313rem solid ${Variables.GrayColor};
  display: flex;
  align-items: center;
  margin-left: 1.5625rem;
`
/**Center Elements */
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`


/**Right Elements */
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`
const MenuItem = styled.div`
  font-size: 0.875rem;
  cursor: pointer;
  margin-left: 1.5625rem;
  ${mobile({ fontSize: '10px', marginLeft: '10px' })}
`
const AnnouncementDiv = styled.div`
  font-size: 1rem;
  background-color: ${Variables.greenColor};
  font-family: ${Variables.Fontfamily};
  color: ${Variables.lightColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  padding: 0.625rem 1.25rem;
`
const Logo = styled.h1`
  font-weight: 700;
  font-size: 1rem;
  ${mobile({ fontSize: '20px' })}
`

export {
  ContainerNav,
  Wrapper,
  Left,
  Right,
  Center,
  Language,
  SearchContainer,
  Input,
  MenuItem,
  AnnouncementDiv,
  Logo
}

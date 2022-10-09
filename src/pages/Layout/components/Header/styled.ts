import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`

export const NavItem = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-left: 20px;
  &.active {
    color: orange;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LogoText = styled.h1`
  margin-left: 10px;
`

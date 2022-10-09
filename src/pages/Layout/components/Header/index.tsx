import { FC } from 'react'

import { Image } from '@mantine/core'

import { Logo } from 'src/common/assets/images'
import { routes } from 'src/router/routes'

import { HeaderContainer, NavItem, LogoContainer, LogoText } from './styled'

const Header: FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Image alt="Blog" src={Logo} height={40} width={40} />
        <LogoText>Blog</LogoText>
      </LogoContainer>
      <nav>
        <NavItem to={routes.home} end>
          Home
        </NavItem>
        <NavItem to={routes.posts}>Posts</NavItem>
      </nav>
    </HeaderContainer>
  )
}

export default Header

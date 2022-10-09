import { FC } from 'react'

import { Outlet } from 'react-router-dom'

import { ErrorContainer } from './styled'

const Home: FC = () => {
  return (
    <>
      <ErrorContainer>home</ErrorContainer>
      <Outlet />
    </>
  )
}

export default Home

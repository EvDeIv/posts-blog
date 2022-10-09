import { FC } from 'react'

import { Link } from 'react-router-dom'

import { routes } from 'src/router/routes'

import { ErrorContainer } from './styled'

const NotFound: FC = () => {
  return (
    <ErrorContainer>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <Link to={routes.home}>Go Home Page</Link>
      </p>
    </ErrorContainer>
  )
}

export default NotFound

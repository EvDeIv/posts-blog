import { FC } from 'react'

import { Loader as MantineLoader } from '@mantine/core'

import { LoaderContainer } from './styled'

const Loader: FC = () => {
  return (
    <LoaderContainer>
      <MantineLoader />
    </LoaderContainer>
  )
}

export default Loader

import { FC } from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from 'src/pages/Home'
import Layout from 'src/pages/Layout'
import NotFound from 'src/pages/NotFound'
import AllPosts from 'src/pages/Posts/AllPosts'
import Post from 'src/pages/Posts/Post'

import { routes } from './routes'

const RootRouter: FC = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.posts}>
          <Route index element={<AllPosts />} />

          <Route path=":postId" element={<Post />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default RootRouter

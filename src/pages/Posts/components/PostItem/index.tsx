import { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import { IPost } from 'src/api/apis'
import { routes } from 'src/router/routes'

import { PostContainer } from './styled'

interface IPostItem {
  post: IPost
}

const PostItem: FC<IPostItem> = ({ post }) => {
  const navigate = useNavigate()

  const handlePostClick = (): void => {
    navigate(`${routes.posts}/${post.id}`)
  }

  return (
    <PostContainer onClick={handlePostClick}>
      <div>{post.title}</div>
      <div>{post.body}</div>
    </PostContainer>
  )
}

export default PostItem

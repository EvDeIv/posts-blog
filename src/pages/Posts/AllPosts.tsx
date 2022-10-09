import { FC } from 'react'

import { usePosts } from 'src/services'

import PostItem from './components/PostItem'
import { PostsContainer } from './styled'

const AllPosts: FC = () => {
  const { data, isLoading } = usePosts()
  console.log(data?.data, isLoading)
  return (
    <PostsContainer>
      <h2>All Posts</h2>
      {data?.status === 200 &&
        data?.data.map((post) => <PostItem key={post.id} post={post} />)}
    </PostsContainer>
  )
}

export default AllPosts

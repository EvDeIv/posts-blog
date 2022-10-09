import { FC } from 'react'

import { Button } from '@mantine/core'
import { useNavigate, useParams } from 'react-router-dom'

import Loader from 'src/pages//components/Loader'
import { routes } from 'src/router/routes'
import { useDeletePost, usePost } from 'src/services'

import PostComments from './components/PostComments'
import { PostContainer } from './styled'

const Post: FC = () => {
  const params = useParams()
  const navigate = useNavigate()

  const { data, isLoading } = usePost(params.postId)
  const deleteSuccessCallback = (): void => {}
  const { mutate: deletePost, isLoading: deleteLoading } = useDeletePost(
    deleteSuccessCallback,
  )
  console.log(data, isLoading)

  const handleDeletePost = (): void => {
    params.postId &&
      deletePost(+params.postId, {
        onSuccess: (data) => {
          if (data.status === 200) {
            navigate(`${routes.posts}`)
          }
        },
      })
  }

  if (isLoading || deleteLoading) return <Loader />

  return (
    <>
      <PostContainer>
        <div>
          <h3>{data?.data.title}</h3>
          <div>{data?.data.body}</div>
        </div>
        <div>
          <Button>Edit</Button>
          <Button ml={20} onClick={handleDeletePost}>
            Delete
          </Button>
        </div>
      </PostContainer>
      {data?.data.comments && <PostComments comments={data?.data.comments} />}
    </>
  )
}

export default Post

import { FC } from 'react'

import { IComment } from 'src/api/apis'

import { CommentsContainer, CommentItem } from './styled'

interface IPostComments {
  comments: IComment[]
}

const PostComments: FC<IPostComments> = ({ comments }) => {
  return (
    <CommentsContainer>
      {comments.map((comment, idx) => (
        <CommentItem key={comment.id}>
          <h4>{`Comment #${idx + 1}`}</h4>
          <p>{comment.body}</p>
        </CommentItem>
      ))}
    </CommentsContainer>
  )
}

export default PostComments

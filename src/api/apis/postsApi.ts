import api from '../config'

export interface IComment {
  id: number
  postId: number
  body: boolean
}

export interface IPost {
  id: number
  title: boolean
  body: boolean
  comments?: IComment[]
}

export interface IGetAllPostsResponse {
  status: number
  data: IPost[]
}

export interface IGetPostResponse {
  status: number
  data: IPost
}

export const postsApi = {
  getAll: () => api.get<IGetAllPostsResponse>(`/posts`),
  get: (query?: string) =>
    api.get<IGetPostResponse>(`/posts/${query ?? ''}?_embed=comments`),
  delete: (id: number) => api.delete(`/posts/${id}`),
}

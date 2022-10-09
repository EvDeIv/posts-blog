import { AxiosResponse } from 'axios'
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query'
import { toast } from 'react-toastify'

import { IGetAllPostsResponse, IGetPostResponse, postsApi } from 'src/api/apis'
import { runCallback } from 'src/common/utils/helpers'

export interface IUsePostQuery {
  id?: string
  _embed?: string
}

/**
 * Fetch all posts
 * @returns useQuery instance
 */
function usePosts(): UseQueryResult<IGetAllPostsResponse, Error> {
  return useQuery(['posts'], () => postsApi.getAll())
}

/**
 * Fetch post
 * @param query
 * @returns useQuery instance
 */
function usePost(query?: string): UseQueryResult<IGetPostResponse, Error> {
  return useQuery(['posts', query], () => postsApi.get(query))
}

/**
 * Fetch post
 * @param query
 * @returns useQuery instance
 */
function useDeletePost(
  successCallback: () => void,
): UseMutationResult<AxiosResponse<any, any>, Error, number, void> {
  const queryClient = useQueryClient()
  return useMutation((id: number) => postsApi.delete(id), {
    onMutate: async () => {
      await queryClient.cancelQueries('posts')
    },
    onSuccess: async (data) => {
      if (data.status === 200) {
        toast.success('Post deleted!')
        runCallback(successCallback)
      }
    },
  })
}

export { usePosts, usePost, useDeletePost }

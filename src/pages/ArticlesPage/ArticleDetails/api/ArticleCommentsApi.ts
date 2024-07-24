import { rtkApi } from '@/shared/api/rtkApi'

const commentsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCommentsByArticleId: build.query({
      query: (articleId) => ({
        url: '/comments',
        params: {
          articleId,
          _expand: 'user'
        }
      })
    }),
    createCommentByArticleId: build.mutation({
      query: ({ userId, articleId, text }) => ({
        url: '/comments',
        method: 'POST',
        body: {
          userId, articleId, text
        }
      })
    })

  })
})

export const { useGetAllCommentsByArticleIdQuery, useCreateCommentByArticleIdMutation } = commentsApi

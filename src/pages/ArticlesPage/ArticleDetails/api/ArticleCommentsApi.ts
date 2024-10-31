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
      }),
      providesTags: ['ArticleComment']
    }),
    createCommentByArticleId: build.mutation({
      query: ({ userId, articleId, text }) => ({
        url: '/comments',
        method: 'POST',
        body: {
          userId, articleId, text
        }
      }),
      invalidatesTags: ['ArticleComment']
    })

  })
})

export const { useGetAllCommentsByArticleIdQuery, useCreateCommentByArticleIdMutation } = commentsApi

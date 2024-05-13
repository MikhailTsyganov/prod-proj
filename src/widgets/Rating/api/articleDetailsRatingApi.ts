import { IRating } from '@/features/Rating'
import { rtkApi } from '@/shared/api/rtkApi'

interface IGetRatingByArticle {
  userId: string
  articleId: string
}

interface ISetRatingArticleReq extends IGetRatingByArticle {
  rate: number
  feedback?: string
}

const articleDetailsRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getRatingByArticle: build.query<IRating[], IGetRatingByArticle>({
      query: ({ articleId, userId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId
        }
      })
    }),
    setRatingArticle: build.mutation<
    void,
    ISetRatingArticleReq
    >({
      query: (args) => ({
        url: '/article-ratings',
        method: 'POST',
        body: args
      })
    })

  })
})

export const { useGetRatingByArticleQuery, useSetRatingArticleMutation } = articleDetailsRatingApi

import { type IArticle } from '@/entities/Article'
import { rtkApi } from '@/shared/api/rtkApi'

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getRecommendationsList: build.query<IArticle[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit
        }
      })
    })
  })
})

export const { useGetRecommendationsListQuery } = recommendationsApi

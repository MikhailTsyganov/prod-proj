import { type ICommentsSchema } from './commentsSchema';
import { type IArticleDetailsRecommendationsSchema } from './recommendationsSchema';

export interface IArticleDetailsPageSchema {
  comments: ICommentsSchema
  recommendations: IArticleDetailsRecommendationsSchema

}

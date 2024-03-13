
import { ICommentsSchema } from "./commentsSchema";
import { IArticleDetailsRecommendationsSchema } from "./recommendationsSchema";

export interface IArticleDetailsPageSchema {
    comments: ICommentsSchema;
    recommendations: IArticleDetailsRecommendationsSchema

}
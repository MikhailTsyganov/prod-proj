import { combineReducers } from "@reduxjs/toolkit";
import { IArticleDetailsPageSchema } from "../types";
import { ArticleDetailsCommentsReducer } from "./AricleDetailsCommentsSlice";
import { ArticleDetailsRecommendationsReducer } from "./AricleDetailsRecommendationsSlice";

export const articleDetailsPageReducer = combineReducers<IArticleDetailsPageSchema>({
    comments: ArticleDetailsCommentsReducer,
    recommendations: ArticleDetailsRecommendationsReducer
})
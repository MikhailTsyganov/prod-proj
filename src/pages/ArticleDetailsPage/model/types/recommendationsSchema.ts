import { EntityState } from "@reduxjs/toolkit";
import { IArticle } from "entities/Article";
import { IComment } from "entities/Comment";

export interface IArticleDetailsRecommendationsSchema extends EntityState<IArticle> {
    isLoading?: boolean
    error?: string
}
import { EntityState } from "@reduxjs/toolkit"
import { EArticleView, IArticle } from "entities/Article"

export interface IArticlePageSchema extends EntityState<IArticle> {
    error?: string
    isLoading?: boolean

    view: EArticleView
}
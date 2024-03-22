import { type EntityState } from '@reduxjs/toolkit'
import { EArticleView, type IArticle } from 'entities/Article'

export interface IArticlePageSchema extends EntityState<IArticle> {
  error?: string
  isLoading?: boolean

  // pagination
  page: number
  limit: number
  hasMore: boolean

  _inited: boolean
}

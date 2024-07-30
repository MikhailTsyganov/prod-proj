import { type EArticleView, type EArticleType } from '@/entities/Article'

import { type TOrder } from '@/shared/types'

export enum EArticlesSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED_AT = 'createdAt'
}

export interface IArticlesSortSchema {
  view: EArticleView
  sort: EArticlesSortField
  search: string
  order: TOrder
  tab: EArticleType

  _inited: boolean
}
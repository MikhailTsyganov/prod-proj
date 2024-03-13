import { EArticleView } from "entities/Article"
import { EArticleType } from "entities/Article/model/types/article"
import { TOrder } from "shared/types"

export enum EArticlesSortField {
    VIEWS = 'views',
    TITLE = "title",
    CREATED_AT = "createdAt"
}

export interface IArticlesSortSchema {
    view: EArticleView
    sort: EArticlesSortField
    search: string
    order: TOrder
    tab: EArticleType

    _inited: boolean
}
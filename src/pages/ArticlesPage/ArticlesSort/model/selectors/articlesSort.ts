import { type IStateSchema } from '@/app/providers/store';
import { EArticleView, EArticleType } from '@/entities/Article';
import { EArticlesSortField } from '../types/ArticlesSortSchema';

export const getArticlesSortView = (state: IStateSchema) => state.articlesPageSort?.view ?? EArticleView.LIST
export const getArticlesSortTab = (state: IStateSchema) => state.articlesPageSort?.tab ?? EArticleType.ALL
export const getArticlesSortSort = (state: IStateSchema) => state.articlesPageSort?.sort ?? EArticlesSortField.CREATED_AT
export const getArticlesSortSearch = (state: IStateSchema) => state.articlesPageSort?.search ?? ''
export const getArticlesSortOrder = (state: IStateSchema) => state.articlesPageSort?.order ?? 'asc'
export const getArticlesSortIsInited = (state: IStateSchema) => state.articlesPageSort?._inited

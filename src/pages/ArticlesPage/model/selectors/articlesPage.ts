import { type IStateSchema } from 'app/providers/store';

export const getArticlesPageIsLoading = (state: IStateSchema) => state.articlesPage?.isLoading
export const getArticlesPageError = (state: IStateSchema) => state.articlesPage?.error
export const getArticlesPagePage = (state: IStateSchema) => state.articlesPage?.page || 1
export const getArticlesPageLimit = (state: IStateSchema) => state.articlesPage?.limit || 9
export const getArticlesPageHasMore = (state: IStateSchema) => state.articlesPage?.hasMore
export const getArticlesPageInited = (state: IStateSchema) => state.articlesPage?._inited

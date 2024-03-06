import {
  type AnyAction,
  type CombinedState,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject
} from '@reduxjs/toolkit';
import { type AxiosInstance } from 'axios';
import { type IArticleDetailsSchema } from 'entities/Article';
import { type ICounterSchema } from 'entities/Counter';
import { type IProfileSchema } from 'entities/Profile';
import { type IUserSchema } from 'entities/User';
import { IAddNewCommentSchema } from 'features/AddNewComment/model/types/addNewComment';
import { type ILoginSchema } from 'features/AuthByUsername';
import { ICommentsSchema } from 'pages/ArticleDetailsPage';
import { IArticlePageSchema } from 'pages/ArticlesPage';

export interface IStateSchema {
  counter: ICounterSchema
  user: IUserSchema

  // Асинхронные редюсеры
  loginForm?: ILoginSchema
  profile?: IProfileSchema
  articleDetails?: IArticleDetailsSchema
  articleDetailsComments?: ICommentsSchema,
  addNewComment?: IAddNewCommentSchema
  articlesPage?: IArticlePageSchema
}

export type TStateSchemaKeys = keyof IStateSchema;

export interface IReturnReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>
  reduce: (
    state: IStateSchema,
    action: AnyAction
  ) => CombinedState<IStateSchema>
  add: (key: TStateSchemaKeys, reducer: Reducer) => void
  remove: (key: TStateSchemaKeys) => void
}

export type IReducerManager = (
  initialReducers: ReducersMapObject<IStateSchema>
) => IReturnReducerManager;

export interface IStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager: IReturnReducerManager
}

export interface IThunkExtraArg {
  api: AxiosInstance
}

export interface IThunkOptions<T> {
  rejectValue: T
  extra: IThunkExtraArg
  state: IStateSchema
}

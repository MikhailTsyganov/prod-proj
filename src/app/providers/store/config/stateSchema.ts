import { type AnyAction, type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { type ICounterSchema } from 'entities/Counter';
import { type IProfileSchema } from 'entities/Profile';
import { type IUserSchema } from 'entities/User';
import { type ILoginSchema } from 'features/AuthByUsername';

export interface IStateSchema {
  counter: ICounterSchema
  user: IUserSchema

  // Асинхронные редюсеры
  loginForm?: ILoginSchema
  profile?: IProfileSchema
}

export type TStateSchemaKeys = keyof IStateSchema;

export interface IReturnReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>
  reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>
  add: (key: TStateSchemaKeys, reducer: Reducer) => void
  remove: (key: TStateSchemaKeys) => void
}

export type IReducerManager = (initialReducers: ReducersMapObject<IStateSchema>) => IReturnReducerManager

export interface IStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager: IReturnReducerManager
}

import { type ReducersMapObject, configureStore, DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from './stateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'

export const createReduxStore = (
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>
) => {
  const staticReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  }

  const reducerManager = createReducerManager(staticReducers)

  const store = configureStore<IStateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })

  // @ts-expect-error
  store.reducerManager = reducerManager

  return store;
}

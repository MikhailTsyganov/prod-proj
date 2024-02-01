import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type IStateSchema } from './stateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

export const createReduxStore = (initialState?: IStateSchema) => {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    counter: counterReducer,
    user: userReducer
  }

  return configureStore<IStateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}

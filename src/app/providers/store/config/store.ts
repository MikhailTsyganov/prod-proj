import { type ReducersMapObject, configureStore, type CombinedState, type Reducer } from '@reduxjs/toolkit'
import { type IThunkExtraArg, type IStateSchema } from './stateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { $api } from 'shared/api/api'
import { scrollSaveReducer } from 'widgets/ScrollSave'
import { rtkApi } from 'shared/api/rtkApi'

export const createReduxStore = (
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>
) => {
  const staticReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scroll: scrollSaveReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
  }

  const reducerManager = createReducerManager(staticReducers)

  const extraArg: IThunkExtraArg = {
    api: $api
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg
      }
    }).concat(rtkApi.middleware)
  })

  // @ts-expect-error
  store.reducerManager = reducerManager

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

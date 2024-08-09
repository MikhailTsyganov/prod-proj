import { type Reducer } from '@reduxjs/toolkit';
import { type IStoreWithManager } from '@/app/providers/store';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { IStateSchema, TStateSchemaKeys } from '@/app/providers/store/config/stateSchema';

export type TReducerList = {
  [key in TStateSchemaKeys]?: Reducer<NonNullable<IStateSchema[key]>>
}

interface IUseAsyncReducerOptins {
  removeAfterUnmount?: boolean
}

const initialOptions: DeepPartial<IUseAsyncReducerOptins> = {
  removeAfterUnmount: true
}

export const useAsyncReducer = (reducers: TReducerList, options: IUseAsyncReducerOptins = initialOptions as IUseAsyncReducerOptins) => {
  const store = useStore() as IStoreWithManager;
  const dispatch = useDispatch();

  const { removeAfterUnmount } = options;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([key, reducer]) => {
      const alreadyHas = mountedReducers[key as TStateSchemaKeys]

      if (!alreadyHas) {
        store.reducerManager.add(key as TStateSchemaKeys, reducer)
        dispatch({ type: `@INIT ${key} reducer` })
      }
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([key, reducer]) => {
          store.reducerManager.remove(key as TStateSchemaKeys)
          dispatch({ type: `@DESTROY ${key} reducer` })
        })
      }
    }
    // eslint-disable-next-line
  }, [])
};

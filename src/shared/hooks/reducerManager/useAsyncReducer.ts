import { type DeepPartial, type Reducer } from '@reduxjs/toolkit';
import { type IStoreWithManager } from 'app/providers/store';
import { type TStateSchemaKeys } from 'app/providers/store/config/stateSchema';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type TReducerList = {
  [key in TStateSchemaKeys]?: Reducer
}

type TReducersListEntry = [TStateSchemaKeys, Reducer];

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
    Object.entries(reducers).forEach(([key, reducer]: TReducersListEntry) => {
      store.reducerManager.add(key, reducer)
      dispatch({ type: `@INIT ${key} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([key, reducer]: TReducersListEntry) => {
          store.reducerManager.remove(key)
          dispatch({ type: `@DESTROY ${key} reducer` })
        })
      }
    }
    // eslint-disable-next-line
  }, [])
};

import { type FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { type IStateSchema } from '../config/stateSchema'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit';

interface IStoreProviderProps {
  children?: React.ReactNode
  initialState?: IStateSchema
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider: FC<IStoreProviderProps> = (props) => {
  const { children, initialState, asyncReducers } = props;

  const store = createReduxStore(initialState, asyncReducers as ReducersMapObject<IStateSchema>);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
};

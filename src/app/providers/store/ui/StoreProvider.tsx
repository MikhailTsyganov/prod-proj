import { type FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { type IStateSchema } from '../config/stateSchema'

interface IStoreProviderProps {
  children?: React.ReactNode
  initialState?: IStateSchema
}

export const StoreProvider: FC<IStoreProviderProps> = (props) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
};

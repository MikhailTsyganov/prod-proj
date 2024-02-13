import { type Story } from '@storybook/react';
import { type IStateSchema, StoreProvider } from 'app/providers/store';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername';
import { type TReducerList } from 'shared/hooks/reducerManager/useAsyncReducer';

const defaultAsyncReducers: TReducerList = {
  loginForm: loginReducer,
  profile: profileReducer
}

export const StoreDecorator = (state: DeepPartial<IStateSchema>, asyncReducers?: TReducerList) => (Story: Story) => {
  return (
    <StoreProvider initialState={state as IStateSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <Story />
    </StoreProvider >
  )
}

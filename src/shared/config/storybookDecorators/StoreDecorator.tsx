import { type ReducersMapObject, type DeepPartial } from '@reduxjs/toolkit';
import { type Story } from '@storybook/react';
import { type IStateSchema, StoreProvider } from 'app/providers/store';
import { loginReducer } from 'features/AuthByUsername';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
  loginForm: loginReducer
}

export const StoreDecorator = (state: DeepPartial<IStateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>) => (Story: Story) => {
  return (
    <StoreProvider initialState={state as IStateSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <Story />
    </StoreProvider >
  )
}

import { type DeepPartial } from '@reduxjs/toolkit';
import { type Story } from '@storybook/react';
import { type IStateSchema, StoreProvider } from 'app/providers/store';

export const StoreDecorator = (state: DeepPartial<IStateSchema>) => (Story: Story) => {
  return (
    <StoreProvider initialState={state as IStateSchema}>
      <Story />
    </StoreProvider >
  )
}

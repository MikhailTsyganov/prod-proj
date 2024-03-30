import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';

import { StoreDecorator } from 'shared/config/storybookDecorators/StoreDecorator';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [StoreDecorator({ loginForm: { username: '123', password: '321' } })]
};

export const WithError: Story = {
  decorators: [StoreDecorator({ loginForm: { username: '123', password: '321', error: 'Здесь отображается ошибка' } })]
};

export const Loading: Story = {
  decorators: [StoreDecorator({ loginForm: { isLoading: true } })]
};

import type { Meta, StoryObj } from '@storybook/react';

import AddNewComment from './AddNewComment';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from 'app/providers/theme';
import { StoreDecorator } from 'shared/config/storybookDecorators/StoreDecorator';
import { action } from '@storybook/addon-actions'

const meta = {
  title: 'features/AddNewComment',
  component: AddNewComment,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof AddNewComment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    onSendComment: action('onSendComment')
  },
  decorators: [StoreDecorator({})]
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK), StoreDecorator({})]
};

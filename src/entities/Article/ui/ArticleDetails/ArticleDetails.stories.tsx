import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetails } from './ArticleDetails';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from 'app/providers/theme';
import { StoreDecorator } from 'shared/config/storybookDecorators/StoreDecorator';

const meta = {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    id: '1'
  },
  decorators: [StoreDecorator({ articleDetails: { data: {} } })]
};

export const Dark: Story = {
  args: {
    id: '1'
  },
  decorators: [ThemeDecorator(ETheme.DARK), StoreDecorator({ articleDetails: { data: {} } })]
};


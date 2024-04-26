import type { Meta, StoryObj } from '@storybook/react';

import { ArticleComments } from './ArticleComments';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from '@/app/providers/theme';
import { StoreDecorator } from '@/shared/config/storybookDecorators/StoreDecorator';

const meta = {
  title: 'widgets/articleDetails/ArticleComments',
  component: ArticleComments,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})]
} satisfies Meta<typeof ArticleComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    articleId: '1'
  }
};

export const Dark: Story = {
  args: {
    articleId: '1'
  },
  decorators: [ThemeDecorator(ETheme.DARK)]
};

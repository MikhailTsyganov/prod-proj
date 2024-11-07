import type { Meta, StoryObj } from '@storybook/react';

import ArticleDetailsRating from './ArticleDetailsRating';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybookDecorators/StoreDecorator';
import { ETheme } from '@/shared/const/theme';

const meta = {
  title: 'widgets/rating/ArticleDetailsRating',
  component: ArticleDetailsRating,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: {
    articleId: '1',
  },
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticleDetailsRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK)],
};

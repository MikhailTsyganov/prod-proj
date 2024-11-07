import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesSortTabs } from './ArticlesSortTabs';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybookDecorators/StoreDecorator';

const meta = {
  title: 'features/ArticlesSort/ArticlesSortTabs',
  component: ArticlesSortTabs,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticlesSortTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK)],
};

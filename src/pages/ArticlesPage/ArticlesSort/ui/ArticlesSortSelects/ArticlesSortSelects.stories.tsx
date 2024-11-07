import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesSortSelects } from './ArticlesSortSelects';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybookDecorators/StoreDecorator';

const meta = {
  title: 'features/ArticlesSort/ArticlesSortSelects',
  component: ArticlesSortSelects,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticlesSortSelects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    fetchData: () => {},
  },
};

export const Dark: Story = {
  args: {
    fetchData: () => {},
  },
  decorators: [ThemeDecorator(ETheme.DARK)],
};

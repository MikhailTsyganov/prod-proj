import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesViewSwitcher } from './ArticlesViewSwitcher';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from '@/shared/const/theme';
import { EArticleView } from '@/entities/Article';

const meta = {
  title: 'features/ArticlesViewSwitcher',
  component: ArticlesViewSwitcher,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof ArticlesViewSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    onChangeView: () => {},
    view: EArticleView.TILE
  }
};

export const Dark: Story = {
  args: {
    onChangeView: () => {},
    view: EArticleView.TILE
  },
  decorators: [ThemeDecorator(ETheme.DARK)]
};

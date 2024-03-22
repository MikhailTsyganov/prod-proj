import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesViewSwitcher } from './ArticlesViewSwitcher';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from 'app/providers/theme';
import { EArticleView } from 'entities/Article';

const meta = {
  title: 'features/ArticlesViewSwitcher',
  component: ArticlesViewSwitcher,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof ArticlesViewSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    view: EArticleView.TILE
  }
};

export const Dark: Story = {
  args: {
    view: EArticleView.TILE
  },
  decorators: [ThemeDecorator(ETheme.DARK)]
};

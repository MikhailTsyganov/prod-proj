import type { Meta, StoryObj } from '@storybook/react';

import ArticleDetailsPage from './ArticleDetailsPage';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from 'app/providers/theme';

const meta = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(ETheme.DARK)]
};

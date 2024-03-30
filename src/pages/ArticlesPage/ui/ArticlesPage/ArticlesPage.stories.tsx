import type { Meta, StoryObj } from '@storybook/react';

import ArticlesPage from './ArticlesPage';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from 'app/providers/theme';

const meta = {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {}
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK)]
};

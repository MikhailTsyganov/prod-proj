import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesSort } from './ArticlesSort';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from 'app/providers/theme';

const meta = {
  title: 'features/ArticlesSort/ArticlesSort',
  component: ArticlesSort,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof ArticlesSort>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {}
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK)]
};

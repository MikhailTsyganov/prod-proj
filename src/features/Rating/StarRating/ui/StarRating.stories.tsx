import type { Meta, StoryObj } from '@storybook/react';

import { StarRating } from './StarRating';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from 'app/providers/theme';

const meta = {
  title: 'FOLDER_NAME/StarRating',
  component: StarRating,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {}
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK)]
};


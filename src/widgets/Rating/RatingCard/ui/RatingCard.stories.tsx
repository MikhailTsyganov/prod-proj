import type { Meta, StoryObj } from '@storybook/react';

import { RatingCard } from './RatingCard';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from 'app/providers/theme';

const meta = {
  title: 'FOLDER_NAME/RatingCard',
  component: RatingCard,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {}
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK)]
};


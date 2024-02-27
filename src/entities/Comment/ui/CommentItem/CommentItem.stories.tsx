import type { Meta, StoryObj } from '@storybook/react';

import { CommentItem } from './CommentItem';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from 'app/providers/theme';

const meta = {
  title: 'entities/CommentItem',
  component: CommentItem,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof CommentItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Light: Story = {
//   args: {}
// };

// export const Dark: Story = {
//   args: {comment},
//   decorators: [ThemeDecorator(ETheme.DARK)]
// };


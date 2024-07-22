import type { Meta, StoryObj } from '@storybook/react';

import { CommentItem } from './CommentItem';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from '@/shared/const/theme';
import { type IComment } from '../../model/types/comment';

const meta = {
  title: 'entities/CommentItem',
  component: CommentItem,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof CommentItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const comment: IComment = {
  id: '1',
  text: 'some comment',
  user: {
    id: '1', username: 'admin'
  }
}

export const Light: Story = {
  args: {
    comment
  }
};

export const Dark: Story = {
  args: { comment },
  decorators: [ThemeDecorator(ETheme.DARK)]
};

export const Loading: Story = {
  args: { isLoading: true },
  decorators: [ThemeDecorator(ETheme.DARK)]
};

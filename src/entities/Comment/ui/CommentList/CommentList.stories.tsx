import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from 'app/providers/theme';
import { type IComment } from '../../model/types/comment';

const meta = {
  title: 'entities/CommentList',
  component: CommentList,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

const comments: IComment[] = [
  {
    id: '1',
    text: 'some comment',
    user: {
      id: '1',
      username: 'admin',
      avatar: 'https://img-forum-wt-ru.cdn.gaijin.net/original/3X/a/f/af62d76a2d92797df0711e6a94d319490936f3a1.jpeg'
    }
  },
  {
    id: '2',
    text: 'some comment 2',
    user: {
      id: '1',
      username: 'admin',
      avatar: 'https://img-forum-wt-ru.cdn.gaijin.net/original/3X/a/f/af62d76a2d92797df0711e6a94d319490936f3a1.jpeg'
    }
  },
  {
    id: '3',
    text: 'some comment 3',
    user: {
      id: '1',
      username: 'admin',
      avatar: 'https://img-forum-wt-ru.cdn.gaijin.net/original/3X/a/f/af62d76a2d92797df0711e6a94d319490936f3a1.jpeg'
    }
  }]

export const Light: Story = {
  args: {
    comments
  }
};

export const Dark: Story = {
  args: { comments },
  decorators: [ThemeDecorator(ETheme.DARK)]
};

export const Loading: Story = {
  args: {
    isLoading: true
  }
};

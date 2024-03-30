import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from '../../assets/tests/storybook.jpeg';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standart: Story = {
  args: {
    src: AvatarImg,
    alt: 'avatar1',
    size: 100
  }
};

export const Small: Story = {
  args: {
    src: AvatarImg,
    alt: 'avatar2',
    size: 50
  }
};

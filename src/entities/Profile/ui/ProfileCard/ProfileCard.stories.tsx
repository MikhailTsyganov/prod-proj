import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error: Story = {
  args: {
    error: 'Error'
  }
};

export const IsLoading: Story = {
  args: {
    isLoading: true

  }
};

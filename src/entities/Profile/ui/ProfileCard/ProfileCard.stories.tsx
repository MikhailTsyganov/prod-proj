import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';

import { StoreDecorator } from 'shared/config/storybookDecorators/StoreDecorator';
import { ECurrency } from 'entities/Currency';
import { ECountry } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.jpeg'

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const error: Story = {
  args: {
    error: 'Error'
  }
};

export const isLoading: Story = {
  args: {
    isLoading: true

  }
};

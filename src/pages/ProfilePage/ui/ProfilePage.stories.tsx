import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { ETheme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybookDecorators/StoreDecorator';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    StoreDecorator({ profile: { data: { firstname: 'admin', lastname: 'admin' } } })
  ]
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(ETheme.DARK),
    StoreDecorator({ profile: { data: { firstname: 'admin', lastname: 'admin' } } })
  ]
};

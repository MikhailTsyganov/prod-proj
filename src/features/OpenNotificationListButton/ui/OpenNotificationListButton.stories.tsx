import type { Meta, StoryObj } from '@storybook/react';

import { OpenNotificationListButton } from './OpenNotificationListButton';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from '@/app/providers/theme';
import { StoreDecorator } from '@/shared/config/storybookDecorators/StoreDecorator';

const notification = {
  title: 'test title',
  description: 'test description',
  userId: '1',
  href: 'google.com'
}

const meta = {
  title: 'features/OpenNotificationListButton',
  component: OpenNotificationListButton,
  parameters: {
    layout: 'centered',
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [
          { ...notification, id: '1' },
          { ...notification, id: '2' },
          { ...notification, id: '3' }
        ]
      }
    ]
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})]
} satisfies Meta<typeof OpenNotificationListButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {}
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK)]
};

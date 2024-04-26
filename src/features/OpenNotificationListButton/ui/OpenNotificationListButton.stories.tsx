import type { Meta, StoryObj } from '@storybook/react';

import { OpenNotificationListButton } from './OpenNotificationListButton';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from '@/app/providers/theme';

const meta = {
  title: 'FOLDER_NAME/OpenNotificationListButton',
  component: OpenNotificationListButton,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
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


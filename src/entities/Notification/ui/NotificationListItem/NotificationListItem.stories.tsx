import type { Meta, StoryObj } from '@storybook/react';

import { NotificationListItem } from './NotificationListItem';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from '@/shared/const/theme';

const meta = {
  title: 'FOLDER_NAME/NotificationListItem',
  component: NotificationListItem,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof NotificationListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    item: {
      id: '1', title: 'test title', description: 'test desc', userId: '1'
    }
  }
};

// export const Dark: Story = {
//   args: {},
//   decorators: [ThemeDecorator(ETheme.DARK)]
// };

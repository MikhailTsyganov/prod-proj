import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybookDecorators/StoreDecorator';
import { ETheme } from '@/shared/const/theme';

const meta = {
  title: 'widgets/profile/EditableProfileCard',
  component: EditableProfileCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK)],
};

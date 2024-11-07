import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybookDecorators/StoreDecorator';
import { ETheme } from '@/shared/const/theme';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [StoreDecorator({ user: { authData: {} } })],
};

export const Dark: Story = {
  decorators: [
    StoreDecorator({ user: { authData: {} } }),
    ThemeDecorator(ETheme.DARK),
  ],
};

export const NoAuth: Story = {
  decorators: [StoreDecorator({})],
};

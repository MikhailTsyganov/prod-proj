import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { ETheme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybookDecorators/StoreDecorator';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [StoreDecorator({})]
};

export const Dark: Story = {
  decorators: [ThemeDecorator(ETheme.DARK), StoreDecorator({})]
};

export const AuthNavbar: Story = {
  decorators: [StoreDecorator({ user: { authData: {} } })]
};

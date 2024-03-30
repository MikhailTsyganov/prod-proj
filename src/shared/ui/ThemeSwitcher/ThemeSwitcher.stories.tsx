import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ETheme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';

const meta = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {

};

export const Dark: Story = {
  decorators: [ThemeDecorator(ETheme.DARK)]
};

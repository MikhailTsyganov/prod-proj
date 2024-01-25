import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';
import { ETheme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {

};

export const Dark: Story = {
  decorators: [ThemeDecorator(ETheme.DARK)]
};

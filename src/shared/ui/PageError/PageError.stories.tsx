import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from './PageError';
import { ETheme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/ThemeDecorator';
// import { ETheme } from '@/shared/const/theme';
const meta = {
  title: 'shared/PageError',
  component: PageError,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(ETheme.DARK)],
};

import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';
import { ETheme } from '@/app/providers/theme';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/ThemeDecorator';

const meta = {
  title: 'shared/Loader',
  component: Loader,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {

};

export const Dark: Story = {
  decorators: [ThemeDecorator(ETheme.DARK)]
};

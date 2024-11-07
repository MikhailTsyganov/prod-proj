import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from '@/shared/const/theme';

const meta = {
  title: 'shared/popups/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    trigger: <div>Click</div>,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolore reprehenderit assumenda necessitatibus unde perferendis!',
  },
};

export const Dark: Story = {
  args: {
    trigger: <div>Click</div>,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolore reprehenderit assumenda necessitatibus unde perferendis!',
  },
  decorators: [ThemeDecorator(ETheme.DARK)],
};

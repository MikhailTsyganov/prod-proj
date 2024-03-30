import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from 'app/providers/theme';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    width: '100%',
    height: 200
  }
};

export const LightCircle: Story = {
  args: {
    width: 100,
    height: 100,
    borderRad: '50%'
  }
};

export const Dark: Story = {
  args: {
    width: '100%',
    height: 200
  },
  decorators: [ThemeDecorator(ETheme.DARK)]
};

export const DarkCircle: Story = {
  args: {
    width: 100,
    height: 100,
    borderRad: '50%'
  },
  decorators: [ThemeDecorator(ETheme.DARK)]
};

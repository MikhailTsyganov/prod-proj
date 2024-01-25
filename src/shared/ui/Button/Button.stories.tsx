import type { Meta, StoryObj } from '@storybook/react';

import { Button, EButtonVariants } from './Button';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from 'app/providers/theme';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    children: 'Text',
    variant: EButtonVariants.FILLED
  }
};

export const Outlined: Story = {
  args: {
    children: 'Text',
    variant: EButtonVariants.OUTLINED
  }
};

export const Transparent: Story = {
  args: {
    children: 'Text',
    variant: EButtonVariants.TRANSPARENT
  }
};

export const FilledDark: Story = {
  args: {
    children: 'Text',
    variant: EButtonVariants.FILLED
  },

  decorators: [ThemeDecorator(ETheme.DARK)]
};

export const OutlinedDark: Story = {
  args: {
    children: 'Text',
    variant: EButtonVariants.OUTLINED
  },

  decorators: [ThemeDecorator(ETheme.DARK)]
};

export const TransparentDark: Story = {
  args: {
    children: 'Text',
    variant: EButtonVariants.TRANSPARENT
  },

  decorators: [ThemeDecorator(ETheme.DARK)]
};

import type { Meta, StoryObj } from '@storybook/react';

import { Button, EButtonSizes, EButtonVariants } from './Button';
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

export const OutlinedSizeL: Story = {
  args: {
    children: 'Text',
    variant: EButtonVariants.OUTLINED,
    size: EButtonSizes.L
  }
};

export const OutlinedSizeXL: Story = {
  args: {
    children: 'Text',
    variant: EButtonVariants.OUTLINED,
    size: EButtonSizes.XL
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

  decorators: [ThemeDecorator(ETheme.LIGHT)]
};

export const BackgroundVariant: Story = {
  args: {
    children: 'Text',
    variant: EButtonVariants.BACKGROUND
  }
};
export const BackgroundInvertedVariant: Story = {
  args: {
    children: 'Text',
    variant: EButtonVariants.BACKGROUND_INVERTED
  }
};

export const Square: Story = {
  args: {
    children: '>',
    square: true,
    variant: EButtonVariants.BACKGROUND_INVERTED
  }
};

export const SizeM: Story = {
  args: {
    children: '>',
    square: true,
    variant: EButtonVariants.BACKGROUND_INVERTED,
    size: EButtonSizes.M
  }
};

export const SizeL: Story = {
  args: {
    children: '>',
    square: true,
    variant: EButtonVariants.BACKGROUND_INVERTED,
    size: EButtonSizes.L
  }
};

export const SizeXL: Story = {
  args: {
    children: '>',
    square: true,
    variant: EButtonVariants.BACKGROUND_INVERTED,
    size: EButtonSizes.XL
  }
};

import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, EAppLinkVariants } from './AppLink';
import { ETheme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: {
    to: '/'
  }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'text',
    variant: EAppLinkVariants.PRIMARY
  }
};

export const Secondary: Story = {
  args: {
    children: 'text',
    variant: EAppLinkVariants.SECONDARY
  }
};

export const PrimaryDark: Story = {
  args: {
    children: 'text',
    variant: EAppLinkVariants.PRIMARY
  },

  decorators: [ThemeDecorator(ETheme.DARK)]
};

export const SecondaryDark: Story = {
  args: {
    children: 'text',
    variant: EAppLinkVariants.SECONDARY
  },

  decorators: [ThemeDecorator(ETheme.DARK)]
};

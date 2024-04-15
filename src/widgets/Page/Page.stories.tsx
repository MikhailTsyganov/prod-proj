import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from 'app/providers/theme';
import { StoreDecorator } from 'shared/config/storybookDecorators/StoreDecorator';

const meta = {
  title: 'widgets/Page',
  component: Page,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})]
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: { children: <div></div> }
};

export const Dark: Story = {
  args: { children: <div></div> },
  decorators: [ThemeDecorator(ETheme.DARK)]
};

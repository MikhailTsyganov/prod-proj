import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { type ITabItem, Tabs } from './Tabs';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from 'app/providers/theme';

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const tabList: ITabItem[] = [
  { content: 'tab 1', value: 'tab 1' },
  { content: 'tab 2', value: 'tab 2' },
  { content: 'tab 3', value: 'tab 3' }
]

export const Light: Story = {
  args: {
    tabList,
    currentValue: 'tab 2'
  }
};

export const Dark: Story = {
  args: {
    tabList,
    currentValue: 'tab 2',
    onTabClick: action('onTabClick')

  },
  decorators: [ThemeDecorator(ETheme.DARK)]
};

import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from '@/app/providers/theme';
import { Text } from '../Text/Text';

const meta = {
  title: 'shared/Card',
  component: Card,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    // eslint-disable-next-line
    children: <Text title='test title' text='test text' />
  }
};

export const Dark: Story = {
  args: {
    // eslint-disable-next-line
    children: <Text title='test title' text='test text' />
  },
  decorators: [ThemeDecorator(ETheme.DARK)]
};

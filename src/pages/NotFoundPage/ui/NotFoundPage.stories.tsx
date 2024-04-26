import type { Meta, StoryObj } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';
import { ETheme } from '@/app/providers/theme';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybookDecorators/StoreDecorator';

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})]
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {

};

export const Dark: Story = {
  decorators: [ThemeDecorator(ETheme.DARK)]
};

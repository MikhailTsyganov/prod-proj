import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from '@/shared/const/theme';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: `Lorem ipsum dolor sit, amet consectetur 
    adipisicing elit. Repellendus beatae, earum quam 
    odio molestiae dolorum? Nostrum hic numquam mollitia ut?`,
    isOpened: true,
  },
};

export const Dark: Story = {
  args: {
    children: `Lorem ipsum dolor sit, amet consectetur 
    adipisicing elit. Repellendus beatae, earum quam 
    odio molestiae dolorum? Nostrum hic numquam mollitia ut?`,
    isOpened: true,
  },
  decorators: [ThemeDecorator(ETheme.DARK)],
};

import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from '@/shared/const/theme';
import { Button } from '../../../Button/Button';

const meta = {
  title: 'shared/popups/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      { id: '1', content: <div>text 1</div> },
      { id: '2', content: <div>text 2</div> },
      { id: '3', content: <div>text 3</div> }
    ],
    trigger: <Button>CLICK ME</Button>
  }
};

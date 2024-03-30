import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from 'app/providers/theme';

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopLeft: Story = {
  args: {
    items: [
      {
        id: '1',
        content: 'value 1'
      },
      {
        id: '2',
        content: 'value 2'
      },
      {
        id: '3',
        content: 'value 3'
      }
    ],
    value: '2',
    dropdownDirection: 'top left'
  },
  decorators: [(Story) => <div style={{ padding: '200px' }}><Story/></div>]
};

export const TopRight: Story = {
  args: {
    items: [
      {
        id: '1',
        content: 'value 1'
      },
      {
        id: '2',
        content: 'value 2'
      },
      {
        id: '3',
        content: 'value 3'
      }
    ],
    value: '2',
    dropdownDirection: 'top right'
  },
  decorators: [(Story) => <div style={{ padding: '200px' }}><Story/></div>]

};

export const BottomLeft: Story = {
  args: {
    items: [
      {
        id: '1',
        content: 'value 1'
      },
      {
        id: '2',
        content: 'value 2'
      },
      {
        id: '3',
        content: 'value 3'
      }
    ],
    value: '2',
    dropdownDirection: 'bottom left'
  },
  decorators: [(Story) => <div style={{ padding: '200px' }}><Story/></div>]

};

export const BottomRight: Story = {
  args: {
    items: [
      {
        id: '1',
        content: 'value 1'
      },
      {
        id: '2',
        content: 'value 2'
      },
      {
        id: '3',
        content: 'value 3'
      }
    ],
    value: '2',
    dropdownDirection: 'bottom right'
  },
  decorators: [(Story) => <div style={{ padding: '200px' }}><Story/></div>]

};

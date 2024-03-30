import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta = {
  title: 'shared/Flex',
  component: Flex,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    children: (
      <>
        <div>example</div>
        <div>example</div>
        <div>example</div>
        <div>example</div>
      </>
    ),
    direction: 'row'
  }
};

export const RowGap4: Story = {
  args: {
    children: (
      <>
        <div>example</div>
        <div>example</div>
        <div>example</div>
        <div>example</div>
      </>
    ),
    direction: 'row',
    gap: '4'
  }
};

export const RowGap8: Story = {
  args: {
    children: (
      <>
        <div>example</div>
        <div>example</div>
        <div>example</div>
        <div>example</div>
      </>
    ),
    direction: 'row',
    gap: '8'
  }
};

export const RowGap16: Story = {
  args: {
    children: (
      <>
        <div>example</div>
        <div>example</div>
        <div>example</div>
        <div>example</div>
      </>
    ),
    direction: 'row',
    gap: '16'
  }
};

export const RowGap32: Story = {
  args: {
    children: (
      <>
        <div>example</div>
        <div>example</div>
        <div>example</div>
        <div>example</div>
      </>
    ),
    direction: 'row',
    gap: '32'
  }
};

export const Column: Story = {
  args: {
    children: (
      <>
        <div>example</div>
        <div>example</div>
        <div>example</div>
        <div>example</div>
      </>
    ),
    direction: 'column'
  }
};

export const ColumnGap16: Story = {
  args: {
    children: (
      <>
        <div>example</div>
        <div>example</div>
        <div>example</div>
        <div>example</div>
      </>
    ),
    direction: 'column',
    gap: '16'
  }
};

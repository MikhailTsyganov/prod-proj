import type { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from './CountrySelect';
import { ECountry } from '../model/types/country';

const meta = {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
};

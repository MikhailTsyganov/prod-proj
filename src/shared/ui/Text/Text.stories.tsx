import type { Meta, StoryObj } from '@storybook/react';

import { ETextSize, ETextVariant, Text } from './Text';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from 'app/providers/theme';

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    title: 'Title',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ipsum voluptas tempore, laudantium odio eos obcaecati natus quidem est fugit.'
  }
};

export const Error: Story = {
  args: {
    title: 'Title',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ipsum voluptas tempore, laudantium odio eos obcaecati natus quidem est fugit.',
    variant: ETextVariant.ERROR
  }
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title'
  }
};

export const OnlyText: Story = {
  args: {
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ipsum voluptas tempore, laudantium odio eos obcaecati natus quidem est fugit.'
  }
};
export const Dark: Story = {
  args: {
    title: 'Title',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ipsum voluptas tempore, laudantium odio eos obcaecati natus quidem est fugit.'
  },

  decorators: [ThemeDecorator(ETheme.DARK)]
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title'
  },

  decorators: [ThemeDecorator(ETheme.DARK)]
};

export const OnlyTextDark: Story = {
  args: {
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ipsum voluptas tempore, laudantium odio eos obcaecati natus quidem est fugit.'
  },

  decorators: [ThemeDecorator(ETheme.DARK)]
};

export const SizeS: Story = {
  args: {
    title: 'Title',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ipsum voluptas tempore, laudantium odio eos obcaecati natus quidem est fugit.',
    size: ETextSize.S
  }
};

export const SizeM: Story = {
  args: {
    title: 'Title',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ipsum voluptas tempore, laudantium odio eos obcaecati natus quidem est fugit.',
    size: ETextSize.M
  }
};

export const SizeL: Story = {
  args: {
    title: 'Title',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ipsum voluptas tempore, laudantium odio eos obcaecati natus quidem est fugit.',
    size: ETextSize.L
  }
};

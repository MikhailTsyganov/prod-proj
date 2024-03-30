import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from 'app/providers/theme';

const meta = {
  title: 'FOLDER_NAME/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof ArticleDetailsPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {}
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK)]
};

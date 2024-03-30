import type { Meta, StoryObj } from '@storybook/react';

import { Code } from './Code';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from 'app/providers/theme';

const meta = {
  title: 'shared/Code',
  component: Code,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof Code>;

const code = "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    code
  }
};

export const Dark: Story = {
  args: { code },
  decorators: [ThemeDecorator(ETheme.DARK)]
};

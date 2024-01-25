import type { Preview } from '@storybook/react';
import { ETheme } from '../../src/app/providers/theme';
import { StyleDecorator } from '../../src/shared/config/storybookDecorators/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybookDecorators/ThemeDecorator'
import { RouterDecorator } from '../../src/shared/config/storybookDecorators/RouterDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },

  decorators: [StyleDecorator, ThemeDecorator(ETheme.LIGHT), RouterDecorator]
};

export default preview;

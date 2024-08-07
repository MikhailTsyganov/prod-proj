import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybookDecorators/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybookDecorators/ThemeDecorator'
import { RouterDecorator } from '../../src/shared/config/storybookDecorators/RouterDecorator'
import { ETheme } from '@/shared/const/theme';
// НУЖНО ДОБАВИТЬ ПРОВЕРКИ НА UNDEFINED В ПЛАГИН ("?")
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: ETheme.LIGHT, color: '#fff' },
        { name: 'dark', class: ETheme.DARK, color: '#000' },
        { name: 'orange', class: ETheme.ORANGE, color: '#bd5012' }
      ]
    }
  },

  decorators: [StyleDecorator, ThemeDecorator(ETheme.LIGHT), RouterDecorator]
};

export default preview;

import ThemeProvider from '@/app/providers/theme/ui/ThemeProvider';
import { ETheme } from '@/shared/const/theme';
import { type StoryFn } from '@storybook/react';

/* eslint-disable react/display-name */
export const ThemeDecorator = (theme: ETheme) => (Story: StoryFn) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  )
}

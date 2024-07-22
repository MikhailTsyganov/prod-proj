import ThemeProvider from '@/app/providers/theme/ui/ThemeProvider';
import { ETheme } from '@/shared/const/theme';
import { type Story } from '@storybook/react';

/* eslint-disable react/display-name */
export const ThemeDecorator = (theme: ETheme) => (Story: Story) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  )
}

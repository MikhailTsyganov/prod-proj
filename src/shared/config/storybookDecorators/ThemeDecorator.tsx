import { type Story } from '@storybook/react';
import { type ETheme } from 'app/providers/theme';
import ThemeProvider from 'app/providers/theme/ui/ThemeProvider';

/* eslint-disable react/display-name */
export const ThemeDecorator = (theme: ETheme) => (Story: Story) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story/>
      </div>
    </ThemeProvider>
  )
}

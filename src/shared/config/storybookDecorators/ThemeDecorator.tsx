import { type Story } from '@storybook/react';
import { type ETheme } from 'app/providers/theme';

/* eslint-disable react/display-name */
export const ThemeDecorator = (theme: ETheme) => (Story: Story) => {
  return (
    <div className={`app ${theme}`}><Story/></div>
  )
}

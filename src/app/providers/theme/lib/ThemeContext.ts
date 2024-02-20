import { createContext } from 'react';

export enum ETheme {
  LIGHT = 'light',
  DARK = 'dark',
  ORANGE = 'orange',
}

export interface IThemeContext {
  theme?: ETheme
  setTheme?: (newTheme: ETheme) => void
}

export const ThemeContext = createContext<IThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

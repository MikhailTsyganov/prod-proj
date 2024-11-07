import { ETheme } from '@/shared/const/theme';
import { createContext } from 'react';

export interface IThemeContext {
  theme?: ETheme;
  setTheme?: (newTheme: ETheme) => void;
}

export const ThemeContext = createContext<IThemeContext>({});

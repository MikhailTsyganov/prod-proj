import { type FC, useMemo, useState, type ReactNode } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme) || ETheme.LIGHT;

interface IThemeProviderProps {
  initialTheme?: ETheme
  children: ReactNode
}

const ThemeProvider = ({ children, initialTheme }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<ETheme>(initialTheme || defaultTheme);

  const defaultValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

import { useMemo, useState, type ReactNode } from 'react';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { ETheme } from '@/shared/const/theme';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme) || ETheme.LIGHT;

interface IThemeProviderProps {
  initialTheme?: ETheme;
  children: ReactNode;
}

const ThemeProvider = ({ children, initialTheme }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<ETheme>(initialTheme || defaultTheme);

  const defaultValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

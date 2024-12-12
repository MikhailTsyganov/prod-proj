import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';
import { ETheme } from '@/shared/const/theme';
import { useJsonSettings } from '@/entities/User';

interface IThemeProviderProps {
  initialTheme?: ETheme;
  children: ReactNode;
}

const ThemeProvider = ({ children, initialTheme }: IThemeProviderProps) => {
  const { theme: defaultTheme = ETheme.LIGHT } = useJsonSettings();
  const [isThemeInited, setIsThemeInited] = useState(false);

  const [theme, setTheme] = useState<ETheme>(initialTheme || defaultTheme);

  useEffect(() => {
    if (!isThemeInited) {
      setTheme(defaultTheme);
      setIsThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);

  const defaultValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

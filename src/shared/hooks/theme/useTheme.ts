import { useContext } from 'react';
import {
  ETheme,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext
} from 'app/providers/theme/lib/ThemeContext';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toogleTheme = () => {
    const newTheme = theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  document.body.className = theme as string;

  return { theme: theme || ETheme.LIGHT, toogleTheme };
};

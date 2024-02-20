import { useContext } from 'react';
import {
  ETheme,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext
} from 'app/providers/theme/lib/ThemeContext';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toogleTheme = () => {
    let newTheme: ETheme;

    switch (theme) {
      case ETheme.DARK:
        newTheme = ETheme.LIGHT
        break;
      case ETheme.LIGHT:
        newTheme = ETheme.ORANGE
        break;
      case ETheme.ORANGE:
        newTheme = ETheme.DARK
        break;

      default:
        newTheme = ETheme.LIGHT
        break;
    }

    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  document.body.className = theme as string;

  return { theme: theme || ETheme.LIGHT, toogleTheme };
};

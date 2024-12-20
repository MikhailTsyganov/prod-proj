import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ETheme } from '@/shared/const/theme';
// import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';

interface useThemeResult {
  theme: ETheme;
  toggleTheme: (saveAction?: (theme: ETheme) => void) => void;
}

export const useTheme = (): useThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction?: (theme: ETheme) => void) => {
    let newTheme: ETheme;

    switch (theme) {
      case ETheme.DARK:
        newTheme = ETheme.LIGHT;
        break;
      case ETheme.LIGHT:
        newTheme = ETheme.ORANGE;
        break;
      case ETheme.ORANGE:
        newTheme = ETheme.DARK;
        break;

      default:
        newTheme = ETheme.LIGHT;
        break;
    }

    setTheme?.(newTheme);
    saveAction?.(newTheme);
    // localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  document.body.className = theme as string;

  return { theme: theme || ETheme.LIGHT, toggleTheme };
};

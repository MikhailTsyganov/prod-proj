import { ETheme } from '@/shared/const/theme';

export interface IJSONSettings {
  theme?: ETheme;
  isFirstVisit?: boolean;
  settingsPageHasBeenOpen?: boolean;
  isArticlesPageWasOpened?: boolean;
}

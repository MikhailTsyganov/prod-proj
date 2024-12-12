import { memo, useCallback, type FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { ETheme } from '@/shared/const/theme';

import { Button, EButtonVariants } from '../Button/Button';

// eslint-disable-next-line
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDIspatch';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = memo((props) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const { theme, toggleTheme } = useTheme();

  const onToggle = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [toggleTheme, dispatch]);

  return (
    <Button
      variant={EButtonVariants.TRANSPARENT}
      className={classNames('', {}, [className])}
      onClick={onToggle}
    >
      {theme === ETheme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
});

import { type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTheme } from 'shared/hooks';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { ETheme } from 'app/providers/theme';

import s from './ThemeSwitcher.module.scss';
import { Button, EButtonVariants } from '../Button/Button';

interface IThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
  const { className } = props;

  const { theme, toogleTheme } = useTheme();

  return (
    <Button
      variant={EButtonVariants.TRANSPARENT}
      className={classNames(s.themeswitcher, {}, [className])}
      onClick={toogleTheme}>
      {theme === ETheme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};

import { memo, type FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { ETheme } from '@/shared/const/theme';

import { Button, EButtonVariants } from '../Button/Button';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = memo((props) => {
  const { className } = props;

  const { theme, toogleTheme } = useTheme();

  return (
    <Button
      variant={EButtonVariants.TRANSPARENT}
      className={classNames('', {}, [className])}
      onClick={toogleTheme}
    >
      {theme === ETheme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
});

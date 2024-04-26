import { memo, type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import s from './Button.module.scss';

export enum EButtonVariants {
  FILLED = 'filled',
  OUTLINED = 'outlined',
  OUTLINED_RED = 'outlined_red',
  TRANSPARENT = 'transparent',
  TRANSPARENT_INVERTED = 'transparentInverted',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum EButtonSizes {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: EButtonVariants
  square?: boolean
  size?: EButtonSizes
  disabled?: boolean
}

export const Button: FC<IButtonProps> = memo((props) => {
  const {
    className,
    children,
    variant = EButtonVariants.FILLED,
    square,
    size = EButtonSizes.M,
    disabled,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(
        s.button,
        { [s.square]: square, [s.disabled]: disabled },
        [className, s[variant], s[size]]
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
});

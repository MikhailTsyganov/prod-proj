import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './Button.module.scss';

export enum EButtonVariants {
  FILLED = 'filled',
  OUTLINED = 'outlined',
  TRANSPARENT = 'transparent',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
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
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    variant = EButtonVariants.FILLED,
    square,
    size = EButtonSizes.M,
    ...otherProps
  } = props;

  return (
    <button className={classNames(s.button, { [s.square]: square }, [className, s[variant], s[size]])} {...otherProps}>
      {children}
    </button>
  );
};

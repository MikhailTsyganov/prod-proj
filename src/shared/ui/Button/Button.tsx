import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './Button.module.scss';

export enum EButtonVariants {
  FILLED = 'filled',
  OUTLINED = 'outlined',
  TRANSPARENT = 'transparent',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: EButtonVariants
}

export const Button: FC<IButtonProps> = (props) => {
  const { className, children, variant = EButtonVariants.FILLED, ...otherProps } = props;

  return (
    <button className={classNames(s.button, {}, [className, s[variant]])} {...otherProps}>
      {children}
    </button>
  );
};

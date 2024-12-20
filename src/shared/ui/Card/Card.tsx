import { type FC, type HTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import s from './Card.module.scss';

export enum ECardVariant {
  FILLED = 'filled',
  OUTLINED = 'outlined',
}

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  variant?: ECardVariant;
  max?: boolean;
}

export const Card: FC<ICardProps> = (props) => {
  const {
    className,
    children,
    variant = ECardVariant.FILLED,
    max,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(s.Card, { [s.max]: max }, [className, s[variant]])}
      {...otherProps}
    >
      {children}
    </div>
  );
};

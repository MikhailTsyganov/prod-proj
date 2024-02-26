import { memo, type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './Text.module.scss';

export enum ETextVariant {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum ETextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}

export enum ETextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l'
}

interface ITextProps {
  className?: string
  title?: string
  text?: string
  variant?: ETextVariant
  align?: ETextAlign
  size?: ETextSize
}

export const Text: FC<ITextProps> = memo((props) => {
  const {
    className,
    title,
    text,
    variant = ETextVariant.PRIMARY,
    align = ETextAlign.LEFT,
    size = ETextSize.M

  } = props;

  return (
    <div className={classNames(s.Text, {}, [className, s[variant], s[align], s[size]])}>
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  )
});

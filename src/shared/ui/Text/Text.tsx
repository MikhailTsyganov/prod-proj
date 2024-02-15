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

interface ITextProps {
  className?: string
  title?: string
  text?: string
  variant?: ETextVariant
  align?: ETextAlign
}

export const Text: FC<ITextProps> = memo((props) => {
  const {
    className,
    title,
    text,
    variant = ETextVariant.PRIMARY,
    align = ETextAlign.LEFT
  } = props;

  return (
    <div className={classNames(s.Text, {}, [className, s[variant], s[align]])}>
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  )
});

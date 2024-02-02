import { type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './Text.module.scss';

export enum ETextVariant {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface ITextProps {
  className?: string
  title?: string
  text?: string
  variant?: ETextVariant
}

export const Text: FC<ITextProps> = (props) => {
  const { className, title, text, variant = ETextVariant.PRIMARY } = props;

  return (
    <div className={classNames(s.Text, {}, [className, s[variant]])}>
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  )
};

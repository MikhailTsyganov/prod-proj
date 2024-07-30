import { type ReactNode } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import './Loader.scss';

interface ILoaderProps {
  className?: string
  children?: ReactNode
}

export const Loader = (props: ILoaderProps) => {
  const { className, children } = props;

  return (
    <div className={classNames('', {}, [className, 'lds-hourglass'])}>
      {children}
    </div>
  )
};

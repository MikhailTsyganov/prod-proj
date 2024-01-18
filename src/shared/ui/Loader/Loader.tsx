import { type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import './Loader.scss';

interface ILoaderProps {
  className?: string
}

export const Loader: FC<ILoaderProps> = (props) => {
  const { className, children } = props;

  return (
    <div className={classNames('', {}, [className, 'lds-hourglass'])}>
      {children}
    </div>
  )
};

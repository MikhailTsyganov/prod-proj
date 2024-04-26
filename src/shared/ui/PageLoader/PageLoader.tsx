import { type FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Loader } from '../Loader/Loader';

import s from './PageLoader.module.scss';

interface IPageLoaderProps {
  className?: string
}

export const PageLoader: FC<IPageLoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(s.pageLoader, {}, [className])}><Loader/></div>

  )
};

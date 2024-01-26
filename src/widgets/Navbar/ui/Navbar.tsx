import { type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './Navbar.module.scss';

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.links}>
        /
      </div>
    </div>
  );
};

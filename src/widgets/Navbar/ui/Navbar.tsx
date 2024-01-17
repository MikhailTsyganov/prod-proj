import { type FC } from 'react';
import { AppLink, EAppLinkVariants } from 'shared/ui/AppLink/AppLink';
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
        <AppLink to="/" className={s.mailLink}>
          Главная
        </AppLink>
        <AppLink variant={EAppLinkVariants.SECONDARY} to="/about">
          О сайте
        </AppLink>
      </div>
    </div>
  );
};

import { type FC } from 'react';
import { AppLink, EAppLinkVariants } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.links}>
        <AppLink to="/" className={s.mailLink}>
          {t('Главная страница')}
        </AppLink>
        <AppLink variant={EAppLinkVariants.SECONDARY} to="/about">
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};

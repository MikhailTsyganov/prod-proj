import { type FC, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { type ISidebarItem } from '../../model/types/SidebarItem.types';

import s from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { getUserAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';

interface ISidebarItemProps {
  item: ISidebarItem
  isOpened: boolean
}

export const SidebarItem: FC<ISidebarItemProps> = memo((props) => {
  const { item, isOpened } = props;
  const { path, text, Icon } = item;

  const isAuth = useSelector(getUserAuthData);

  const { t } = useTranslation();

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <div className={classNames(s.SidebarItem)}>
      <AppLink to={path} className={s.listLink}>
        <Icon className={s.icon} />
        {isOpened && <span className={s.linkText}>{t(text)}</span>}
      </AppLink>
    </div>
  );
});

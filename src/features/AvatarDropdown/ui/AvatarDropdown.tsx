import { useSelector } from 'react-redux';
import s from './AvatarDropdown.module.scss';
import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popups';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { Avatar } from '@/shared/ui/Avatar';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDIspatch';
import { useTranslation } from 'react-i18next';
import { TPopupDirection } from '@/shared/types/ui';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';

interface IAvatarDropdownProps {
  className?: string
  direction?: TPopupDirection
}

export const AvatarDropdown = memo((props: IAvatarDropdownProps) => {
  const { className, direction = 'bottom left' } = props;
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const isAdminPanelAvailable = isAdmin || isManager;

  const onLogout = () => {
    dispatch(userActions.logout())
  }

  if (!authData) {
    return null
  }

  return (
    <Dropdown
      items={[
        ...(isAdminPanelAvailable
          ? [{ id: '1', content: t('Админка'), href: getRouteAdminPanel() }]
          : []),
        { id: '2', content: t('Профиль'), href: getRouteProfile(authData.id) },
        { id: '3', content: t('Выйти'), onClick: onLogout }
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
      dropdownDirection={direction}
      className={classNames(s.AvatarDropdown, {}, [className])}
	/>
  )
});

import { useSelector } from 'react-redux';
import s from './AvatarDropdown.module.scss';
import { memo } from 'react';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Dropdown } from 'shared/ui/Popups';
import { type IUser, getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDIspatch';
import { useTranslation } from 'react-i18next';

interface IAvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = memo((props: IAvatarDropdownProps) => {
  const { className } = props;
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
          ? [{ id: '1', content: t('Админка'), href: routePaths.admin_panel }]
          : []),
        { id: '2', content: t('Профиль'), href: routePaths.profile + authData.id },
        { id: '3', content: t('Выйти'), onClick: onLogout }
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
      dropdownDirection='bottom left'
      className={classNames(s.AvatarDropdown, {}, [className])}
	/>
  )
});

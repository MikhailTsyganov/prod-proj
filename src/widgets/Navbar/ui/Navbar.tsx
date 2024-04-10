import { useState, type FC, useCallback, memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, EButtonVariants } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';

import s from './Navbar.module.scss';
import { ETextVariant, Text } from 'shared/ui/Text/Text';
import { AppLink, EAppLinkVariants } from 'shared/ui/AppLink/AppLink';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const [isOpened, setIsOpened] = useState(false);

  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const isAdminPanelAvailable = isAdmin || isManager;

  const onShowModal = useCallback(() => {
    setIsOpened(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setIsOpened(false)
  }, [])

  const onLogout = () => {
    dispatch(userActions.logout())
  }

  if (authData) {
    return (
      <header className={classNames(s.navbar, {}, [className])}>
        <Text
          className={s.appName}
          title={t('My app')}
          variant={ETextVariant.INVERTED}
      />
        <AppLink
          to={routePaths.article_create}
          variant={EAppLinkVariants.SECONDARY}
      >
          {t('Создать статью')}
        </AppLink>
        <Dropdown
          className={s.dropdown}
          items={[
            ...(isAdminPanelAvailable
              ? [{ id: '1', content: t('Админка'), href: routePaths.admin_panel }]
              : []),
            { id: '2', content: t('Профиль'), href: routePaths.profile + authData.id },
            { id: '3', content: t('Выйти'), onClick: onLogout }
          ]}
          trigger={<Avatar size={30} src={authData.avatar} />}
          dropdownDirection='bottom left'
        />
      </header>
    )
  }

  return (
    <header className={classNames(s.navbar, {}, [className])}>
      <Button
        variant={EButtonVariants.TRANSPARENT_INVERTED}
        className={s.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>

      {isOpened && <LoginModal isOpened={isOpened} onClose={onCloseModal} />}
    </header>
  );
});

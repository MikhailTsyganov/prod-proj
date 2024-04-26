import { useState, type FC, useCallback, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, EButtonVariants } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';

import s from './Navbar.module.scss';
import { ETextVariant, Text } from '@/shared/ui/Text/Text';
import { AppLink, EAppLinkVariants } from '@/shared/ui/AppLink/AppLink';
import { routePaths } from '@/shared/config/routeConfig/routeConfig';
import { Dropdown } from '@/shared/ui/Popups/ui/Dropdown/Dropdown';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { HStack } from '@/shared/ui/Stack';
import { OpenNotificationListButton } from '@/features/OpenNotificationListButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { NotificationList } from '@/entities/Notification';

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation()

  const [isOpened, setIsOpened] = useState(false);

  const authData = useSelector(getUserAuthData);

  const onShowModal = useCallback(() => {
    setIsOpened(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setIsOpened(false)
  }, [])

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

        <HStack gap='16' className={s.actions}>

          <OpenNotificationListButton/>
          <AvatarDropdown />
        </HStack>
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

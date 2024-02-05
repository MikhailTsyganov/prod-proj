import { useState, type FC, useCallback } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, EButtonVariants } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

import s from './Navbar.module.scss';

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const [isOpened, setIsOpened] = useState(false);

  const isUserAuth = useSelector(getUserAuthData);

  const onShowModal = useCallback(() => {
    setIsOpened(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setIsOpened(false)
  }, [])

  const onLogout = () => {
    dispatch(userActions.logout())
  }

  if (isUserAuth) {
    return <div className={classNames(s.navbar, {}, [className])}>
      <Button
        variant={EButtonVariants.TRANSPARENT_INVERTED}
        className={s.links}
        onClick={onLogout}
      >
        {t('Выйти')}
      </Button>
    </div>
  }

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <Button
        variant={EButtonVariants.TRANSPARENT_INVERTED}
        className={s.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>

      {!isUserAuth && <LoginModal isOpened={isOpened} onClose={onCloseModal} />}
    </div>
  );
};

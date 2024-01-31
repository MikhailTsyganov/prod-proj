import { useState, type FC, useCallback } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, EButtonVariants } from 'shared/ui/Button/Button';

import s from './Navbar.module.scss';
import { LoginModal } from 'features/AuthByUsername';

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation()

  const [isOpened, setIsOpened] = useState(false);

  const onShowModal = useCallback(() => {
    setIsOpened(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setIsOpened(false)
  }, [])

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <Button
        variant={EButtonVariants.TRANSPARENT_INVERTED}
        className={s.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>

      <LoginModal isOpened={isOpened} onClose={onCloseModal} />
    </div>
  );
};

import { useState, type FC, useCallback } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, EButtonVariants } from 'shared/ui/Button/Button';

import s from './Navbar.module.scss';

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation()

  const [isOpened, setIsOpened] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsOpened(prev => !prev)
  }, [])

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <Button
        variant={EButtonVariants.TRANSPARENT_INVERTED}
        className={s.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>

      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpened={isOpened} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsum eveniet velit dolore, voluptate numquam doloremque neque aspernatur nostrum ullam.
      </Modal>
    </div>
  );
};

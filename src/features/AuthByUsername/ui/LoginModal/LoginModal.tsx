import { Suspense, type FC, memo } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';
import { Loader } from 'shared/ui/Loader/Loader';

// import s from "./LoginModal.module.scss";

interface ILoginModalProps {
  className?: string
  isOpened?: boolean
  onClose?: () => void
}

export const LoginModal: FC<ILoginModalProps> = memo((props) => {
  const { isOpened, onClose } = props;

  return (
    <Modal
      // className={
      //   classNames(s.LoginModal, {}, [className])
      // }
      isOpened={isOpened}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormLazy onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
});

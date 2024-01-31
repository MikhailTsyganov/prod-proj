import { FC } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

import s from "./LoginModal.module.scss";

interface ILoginModalProps {
  className?: string;
  isOpened?: boolean
  onClose?: () => void
}

export const LoginModal: FC<ILoginModalProps> = (props) => {
  const { className, isOpened, onClose } = props;

  return (
    <Modal className={classNames(s.LoginModal, {}, [className])} isOpened={isOpened} onClose={onClose}>
      <LoginForm />
    </Modal>
  )
};

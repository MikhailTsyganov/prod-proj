import { type FC, type ReactNode } from 'react';
import {
  type TMods,
  classNames,
} from '@/shared/lib/helpers/classNames/classNames';
import s from './Modal.module.scss';
import { Portal } from '../Portal/Portal';
import { Backdrop } from '../Backdrop/Backdrop';
import { useModal } from '@/shared/lib/hooks';

interface IModalProps {
  className?: string;
  children?: ReactNode;
  isOpened?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 400;

export const Modal: FC<IModalProps> = (props) => {
  const { className, children, isOpened, onClose, lazy } = props;

  const { closeHandler, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    isOpened,
    close: onClose,
  });

  const mods: TMods = {
    [s.opened]: isOpened,
    [s.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(s.Modal, mods, [className])}>
        <Backdrop onClose={closeHandler} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  );
};

import { type FC, type ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import s from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface IModalProps {
  className?: string
  children?: ReactNode
  isOpened?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 400;

export const Modal: FC<IModalProps> = (props) => {
  const {
    className,
    children,
    isOpened,
    onClose,
    lazy
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [s.opened]: isOpened,
    [s.isClosing]: isClosing
  }

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeydownEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  useEffect(() => {
    if (isOpened) {
      window.addEventListener('keydown', onKeydownEsc)
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeydownEsc)
    }
  }, [isOpened, onKeydownEsc])

  useEffect(() => {
    isOpened && setIsMounted(true)
  }, [isOpened])

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(s.Modal, mods, [className])}>
        <div className={s.backdrop} onClick={closeHandler}>
          <div className={s.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
};

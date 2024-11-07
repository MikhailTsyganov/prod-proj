import { useCallback, useEffect, useRef, useState } from 'react';

interface IUseModalProps {
  close?: () => void;
  animationDelay: number;
  isOpened?: boolean;
}

/**
 * Переиспользуемый хук для модальных компонентов (drawer/modal)
 * @param props
 * @returns
 */

export function useModal(props: IUseModalProps) {
  const { close, animationDelay, isOpened } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    if (close) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        close();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [close, animationDelay]);

  const onKeydownEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler],
  );

  useEffect(() => {
    if (isOpened) {
      window.addEventListener('keydown', onKeydownEsc);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeydownEsc);
    };
  }, [isOpened, onKeydownEsc]);

  useEffect(() => {
    isOpened && setIsMounted(true);
  }, [isOpened]);

  return { isClosing, isMounted, closeHandler };
}

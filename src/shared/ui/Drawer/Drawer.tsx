import s from './Drawer.module.scss';
import { type ReactNode, memo } from 'react';
import { type TMods, classNames } from 'shared/lib/helpers/classNames/classNames';
import { Portal } from '../Portal/Portal';
import { Backdrop } from '../Backdrop/Backdrop';
import { useModal } from 'shared/hooks';

interface IDrawerProps {
  className?: string
  children?: ReactNode
  isOpened?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Drawer = memo((props: IDrawerProps) => {
  const { className, children, isOpened, onClose, lazy } = props;

  const {
    closeHandler,
    isClosing,
    isMounted
  } = useModal({
    animationDelay: 400,
    isOpened,
    close: onClose
  })

  const mods: TMods = {
    [s.opened]: isOpened,
    [s.isClosing]: isClosing
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(s.Drawer, mods, [className])}>
        <Backdrop onClose={closeHandler}/>
        <div className={s.content}>
          {children}
        </div>
      </div>
    </Portal>
  )
});

import s from './Drawer.module.scss';
import { type ReactNode, memo } from 'react';
import { type TMods, classNames } from 'shared/lib/helpers/classNames/classNames';
import { Portal } from '../Portal/Portal';
import { Backdrop } from '../Backdrop/Backdrop';

interface IDrawerProps {
  className?: string
  children?: ReactNode
  isOpened?: boolean
  onClose?: () => void
}

export const Drawer = memo((props: IDrawerProps) => {
  const { className, children, isOpened, onClose } = props;

  const mods: TMods = {
    [s.opened]: isOpened
  }

  return (
    <Portal>
      <div className={classNames(s.Drawer, mods, [className])}>
        <Backdrop onClose={onClose}/>
        <div className={s.content}>
          {children}
        </div>
      </div>
    </Portal>
  )
});

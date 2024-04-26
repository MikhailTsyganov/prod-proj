import s from './Drawer.module.scss';
import { type ReactNode, memo, useEffect, useCallback } from 'react';
import { type TMods, classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Portal } from '../Portal/Portal';
import { Backdrop } from '../Backdrop/Backdrop';
import { useModal } from '@/shared/hooks';
import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider';
// import { useDrag } from '@use-gesture/react'
// import { a, useSpring, config } from '@react-spring/web'

interface IDrawerProps {
  className?: string
  children?: ReactNode
  isOpened?: boolean
  onClose?: () => void
  lazy?: boolean
}

const height = window.innerHeight - 100;

export const DrawerContent = memo((props: IDrawerProps) => {
  const { className, children, isOpened, onClose, lazy } = props;
  const { Gesture, Spring } = useAnimationLibs()

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpened) {
      openDrawer();
    }
  }, [api, isOpened, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose
    });
  };

  const bind = Gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
      if (my < -70) cancel()

      if (last) {
        my > height * 0.5 || (vy > 0.5 && dy > 0) ? close(vy) : openDrawer()
      } else api.start({ y: my, immediate: true })
    },
    { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
  )

  const display = y.to((py) => (py < height ? 'block' : 'none'))

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
        <Spring.a.div
          className={s.content}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  )
});

const DrawerAsync = (props: IDrawerProps) => {
  const { isLoaded } = useAnimationLibs()

  if (!isLoaded) {
    return null
  }

  return (
    <DrawerContent {...props}/>
  )
}

export const Drawer = (props: IDrawerProps) => {
  return (
    <AnimationProvider>
      <DrawerAsync {...props}/>
    </AnimationProvider>
  )
}

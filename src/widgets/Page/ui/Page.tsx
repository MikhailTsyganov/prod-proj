import { useLocation } from 'react-router-dom';
import s from './Page.module.scss';
import { type FC, type MutableRefObject, type UIEvent, memo, useRef, type ReactNode } from 'react';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDIspatch';
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll/useInfiniteScroll';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { getScrollByPath, scrollSaveActions } from '@/widgets/ScrollSave';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { type IStateSchema } from '@/app/providers/store';
import { useThrottle } from '@/shared/hooks/useThrottle/useThrottle';

interface IPageProps {
  className?: string
  onScrollEnd?: () => void
  children: ReactNode
}

export const PAGE_ID = 'PAGE_ID'

export const Page = (props: IPageProps) => {
  const { className, children, onScrollEnd } = props;
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

  const scrollByPath = useSelector((state: IStateSchema) => getScrollByPath(state, pathname))

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollByPath
  })

  const onScroll = useThrottle((e: UIEvent<HTMLElement>) => {
    dispatch(scrollSaveActions.setScroll({ path: pathname, scrollPos: e.currentTarget.scrollTop }))
  }, 500)

  return (
    <main
      className={classNames(s.Page, {}, [className])}
      ref={wrapperRef}
      onScroll={onScroll}
      id={PAGE_ID}
		>
      {children}
      {onScrollEnd && <div ref={triggerRef} className={s.trigger}></div>}
    </main >
  )
};

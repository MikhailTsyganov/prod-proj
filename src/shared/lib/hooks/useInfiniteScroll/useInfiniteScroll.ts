import { useEffect } from 'react';

export interface IUseInfiniteScrollProps {
  callback?: () => void;
  triggerRef: React.MutableRefObject<HTMLElement>;
  wrapperRef: React.MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({
  triggerRef,
  wrapperRef,
  callback,
}: IUseInfiniteScrollProps) => {
  useEffect(() => {
    if (callback) {
      const triggerRefValue = triggerRef.current;

      const obsOptions = {
        root: wrapperRef.current,
        rootMargin: '0px',
        threshold: 1.0,
      };

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          // только когда объект ПОЯВЛЯЕТСЯ в зоне видимости
          callback();
        }
      }, obsOptions);

      observer.observe(triggerRefValue);

      return () => {
        if (observer && triggerRefValue) {
          observer.unobserve(triggerRefValue);
        }
      };
    }
  }, [triggerRef, wrapperRef, callback]);
};

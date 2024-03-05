import { useEffect, useRef } from "react"

export interface IUseInfiniteScrollProps {
    callback?: () => void
    triggerRef: React.MutableRefObject<HTMLElement>
    wrapperRef: React.MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = ({ triggerRef, wrapperRef, callback }: IUseInfiniteScrollProps) => {

    useEffect(() => {
        if (callback) {
            const obsOptions = {
                root: wrapperRef.current,
                rootMargin: "0px",
                threshold: 1.0,
            }

            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) { // только когда объект ПОЯВЛЯЕТСЯ в зоне видимости
                    callback()
                }
            }, obsOptions);

            observer.observe(triggerRef.current);

            return () => {
                if (observer && triggerRef.current) {
                    observer.unobserve(triggerRef.current)
                }

            }
        }

    }, [triggerRef, wrapperRef, callback])





}

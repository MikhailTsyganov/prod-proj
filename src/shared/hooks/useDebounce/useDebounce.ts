import { useCallback, useRef } from 'react'

export const useDebounce = (cb: (...args: any) => void, delay: number) => {
  const timer = useRef<NodeJS.Timeout>()

  return useCallback(
    (...args: any) => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
      timer.current = setTimeout(() => {
        // eslint-disable-next-line
        cb(...args)
      }, delay);
    },
    [cb, delay]
  )
}

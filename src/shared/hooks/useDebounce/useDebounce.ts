import { useCallback, useEffect, useRef, useState } from "react"

export const useDebounce = (cb: (...args: any) => void, delay: number) => {
    const timer = useRef() as React.MutableRefObject<any>

    return useCallback(
        (...args: any) => {
            if (timer.current) {
                clearTimeout(timer.current)
            }
            timer.current = setTimeout(() => {
                cb(...args)
            }, delay);

        },
        [cb, delay],
    )


}
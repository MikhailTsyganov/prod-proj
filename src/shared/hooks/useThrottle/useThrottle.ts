import { useCallback, useRef, useState } from "react"

export const useThrottle = (callback: (...args: any) => void, delay: number) => {
    const [throttleRef, setThrottleRef] = useState(false)

    return useCallback(
        (...args: any) => {
            if (!throttleRef) {
                callback(...args)
                setThrottleRef(true)


                setTimeout(() => {
                    setThrottleRef(false)
                }, delay);
            }
        },
        [callback, delay],
    )

}
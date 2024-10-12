import { useRef } from "react"

export default function useThrottle(callback: () => void, limit = 200) {
  const lastRun = useRef(Date.now())

  return () => {
    if (Date.now() - lastRun.current >= limit) {
      callback()
      lastRun.current = Date.now()
    }
  }
}

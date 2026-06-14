import { useEffect, useRef, useState } from 'react'

/**
 * Counts up from 0 to `end` once the element enters the viewport.
 * Returns [count, ref] — attach ref to the element to observe.
 */
export function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()

          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            // easeOutExpo for a premium settle
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            setCount(Math.round(eased * end))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration])

  return [count, ref]
}

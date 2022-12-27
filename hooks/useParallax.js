import { useRef, useEffect } from 'react'

/**
 *
 * @param {number} intensity
 * @returns ref
 */

function useParallax(intensity) {
  const ref = useRef()

  useEffect(() => {
    const handleScroll = () => {
      const { top } = ref.current.getBoundingClientRect()
      const scrollY = window.scrollY
      ref.current.style.transform = `translateY(${
        (top - scrollY) * intensity
      }px)`
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return ref
}

export default useParallax

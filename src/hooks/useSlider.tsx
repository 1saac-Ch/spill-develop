import { useMediaQuery } from '@mui/material'
import { useState } from 'react'

export default function useSlider<T>(items: T[], limit = 3) {
  const [state, setState] = useState({
    activeSlide: 0,
  })

  const { activeSlide } = state
  const isMobile = useMediaQuery('(max-width:768px)')

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setState((prev) => ({
  //       ...prev,
  //       activeSlide: (prev.activeSlide + 1) % hotriview.length,
  //       nodeRef: activeSlide,
  //     }))
  //   }, 5000)
  //   return () => clearInterval(interval)
  // })

  const handleChangeSlide = (index: number) => {
    setState((prev) => ({
      ...prev,
      activeSlide: index * (isMobile ? 1 : limit),
      nodeRef: activeSlide,
    }))
  }

  const handlePrevOrNext = (isNext: boolean) => {
    if (isNext) {
      setState((prev) => ({
        ...prev,
        activeSlide: (prev.activeSlide + (isMobile ? 1 : limit)) % items.length,
        nodeRef: activeSlide,
      }))
    } else {
      setState((prev) => ({
        ...prev,
        activeSlide:
          (prev.activeSlide - (isMobile ? 1 : limit) + items.length) %
          items.length,
        nodeRef: activeSlide,
      }))
    }
  }

  function getEndIndex(slide: number) {
    if (isMobile) return slide + 1
    return slide + limit
  }

  function isActiveDot(indexDot: number) {
    if (isMobile) {
      return indexDot - 1 === activeSlide
    }
    const endIndex = getEndIndex(activeSlide)
    return endIndex / limit === indexDot
  }

  const content = items.slice(activeSlide, getEndIndex(activeSlide))

  const slides = isMobile
    ? items
    : Array(Math.floor(items.length / limit)).fill(0)

  return {
    handleChangeSlide,
    handlePrevOrNext,
    isActiveDot,
    content,
    slides,
    activeSlide,
  }
}

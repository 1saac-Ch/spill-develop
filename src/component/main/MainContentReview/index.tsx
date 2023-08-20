import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import Card from '@/component/elements/Card'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { youtube } from '@/component/pages/Home/dummy.api'

const MainContentReview = () => {
  const [state, setState] = useState({
    activeSlide: 0,
  })

  const { activeSlide } = state
  const nodeRef = useRef(activeSlide)

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => ({
        ...prev,
        activeSlide: (prev.activeSlide + 1) % youtube.length,
        nodeRef: activeSlide,
      }))
    }, 5000)
    return () => clearInterval(interval)
  })

  const handlePrevOrNext = (isNext: boolean) => {
    if (isNext) {
      setState((prev) => ({
        ...prev,
        activeSlide: (prev.activeSlide + 1) % youtube.length,
        nodeRef: activeSlide,
      }))
    } else {
      setState((prev) => ({
        ...prev,
        activeSlide: (prev.activeSlide - 1 + youtube.length) % youtube.length,
        nodeRef: activeSlide,
      }))
    }
  }
  return (
    <section className="main-container">
      <div className="flex gap-[44px] justify-between">
        <h1 className={styles.title}>
          Konten Review <br className="md:hidden" /> Pilihan.
        </h1>
        <div className={styles.line}>
          <div />
        </div>
        <div className="flex gap-6 items-center">
          <div className={styles.dots} onClick={() => handlePrevOrNext(false)}>
            <ArrowBackIcon sx={{ color: 'white' }} />
          </div>
          <div className={styles.dots} onClick={() => handlePrevOrNext(true)}>
            <ArrowForwardIcon sx={{ color: 'white' }} />
          </div>
        </div>
      </div>
      <div className={styles.contentReview}>
        <div className={styles.gridCardItems}>
          {youtube.map((item, i) => (
            <Card imgUrl={item.imgUrl} key={i} imgHeight={'h-[228px]'}>
              <div className="h-full flex flex-col p-4 gap-2 ">
                <h6 className="text-title-md md:text-title-lg md:font-[700px] truncate font-[600]">
                  {item.title}
                </h6>
                <div className="flex-grow font-tebal text-lg items-stretch  ">
                  <p className="text-body-md md:text-body-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MainContentReview

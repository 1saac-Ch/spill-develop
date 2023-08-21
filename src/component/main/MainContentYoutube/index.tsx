import React, { useState, useRef, useEffect } from 'react'
import NextLink from 'next/link'
import styles from './index.module.scss'
import { hotriview } from '@/component/pages/Home/dummy.api'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import ProductCard from '@/component/catalogue/ProductCard'
import ComputerImage from '@/assets/images/computer.jpg'
import { dataContentYotube } from './api.youtube'
import YoutubeCard from '@/component/elements/YoutubeCard'
import { useMediaQuery } from '@mui/material'

const MainContentYoutube = () => {
  const [state, setState] = useState({
    activeSlide: 0,
  })

  const { activeSlide } = state
  const nodeRef = useRef(activeSlide)
  const [slide, setSlide] = useState<string>()

  const handlePrevOrNext = (isNext: boolean) => {
    if (isNext) {
      setState((prev) => ({
        ...prev,
        activeSlide: (prev.activeSlide + 1) % hotriview.length,
        nodeRef: activeSlide,
      }))
    } else {
      setState((prev) => ({
        ...prev,
        activeSlide:
          (prev.activeSlide - 1 + hotriview.length) % hotriview.length,
        nodeRef: activeSlide,
      }))
    }
  }

  let youtubeContent = dataContentYotube.slice(0, 1)

  return (
    <div className="relative flex flex-col gap-10 justify-center pb-10 bg-blue-200">
      <div className="flex gap-[44px] justify-between">
        <h1 className={styles.title}>
          Konten Review <br className="md:hidden" /> Pilihan
        </h1>
        <div className={styles.line}>
          <div />
        </div>
        <div className="flex gap-[23px] items-center">
          <div className={styles.dots} onClick={() => handlePrevOrNext(false)}>
            <ArrowBackIcon
              sx={{
                color: 'white',
                padding: {
                  xs: '4px',
                  md: '0px',
                },
              }}
            />
          </div>
          <div className={styles.dots} onClick={() => handlePrevOrNext(true)}>
            <ArrowForwardIcon
              sx={{
                color: 'white',
                padding: {
                  xs: '4px',
                  md: '0px',
                },
              }}
            />
          </div>
        </div>
      </div>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={activeSlide}
          classNames={{
            enter: `opacity-0 translate-x-[${slide}50%] transition-all duration-500 ease-in-out`,
            enterActive: `opacity-100 translate-x-[${slide}0] transition-all duration-500 ease-in-out`,
            exit: 'opacity-100 transform scale-100 transition-all duration-500 ease-in-out',
            exitActive:
              'opacity-0 transform scale-90 transition-all duration-500 ease-in-out',
          }}
          timeout={500}
        >
          <div className={styles.gridCardItems}>
            {youtubeContent.map((item, i) => (
              <React.Fragment key={i}>
                <YoutubeCard youtubeUrl={item.url} title={item.title_content} />
              </React.Fragment>
            ))}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

export default MainContentYoutube

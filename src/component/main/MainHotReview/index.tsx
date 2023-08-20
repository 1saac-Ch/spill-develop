import React, { useState, useRef, useEffect } from 'react'
import NextLink from 'next/link'
import styles from './index.module.scss'
import { hotriview } from '@/component/pages/Home/dummy.api'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import clsx from 'clsx'
import Card from '@/component/elements/Card'
import RatingStar from '@/component/elements/RatingStar'
import Image from 'next/image'

const MainHotReview = () => {
  const [state, setState] = useState({
    activeSlide: 0,
  })

  const { activeSlide } = state
  const [slide, setSlide] = useState<string>()

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
    if (index > activeSlide) {
      setSlide('')
    } else {
      setSlide('-')
    }
    setState((prev) => ({
      ...prev,
      activeSlide: index,
      nodeRef: activeSlide,
    }))
  }

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

  return (
    <div className="relative flex justify-center w-screen pb-10 ">
      <div className={styles.roundedTopHotReview} />
      <div className={'main-container'}>
        <div className="flex gap-[44px] justify-between">
          <h1 className={styles.title}>Hot Review.</h1>
          <div className={styles.line}>
            <div />
          </div>
          <div className="flex gap-[23px] items-center">
            <div
              className={styles.dots}
              onClick={() => handlePrevOrNext(false)}
            >
              <ArrowBackIcon sx={{ color: 'white' }} />
            </div>
            <div className={styles.dots} onClick={() => handlePrevOrNext(true)}>
              <ArrowForwardIcon sx={{ color: 'white' }} />
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
              {hotriview[activeSlide].card.map((item, i) => (
                <React.Fragment key={i}>
                  <NextLink href="/detail-product" passHref>
                    <Card imgUrl={item.imgUrl}>
                      <div className="h-full flex flex-col p-6 gap-4">
                        <div>
                          <RatingStar rating={item.rating} />
                        </div>
                        <div className="flex-grow text-title-md md:text-title-lg font-bold ">
                          {item.title}
                        </div>
                        <div className="flex-grow font-tebal text-lg items-stretch">
                          <p className="text-body-md md:text-body-lg font-satoshi">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <div>
                            <Image
                              width={12}
                              height={12}
                              className="h-12 w-12 rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                              alt="Avatar"
                            />
                          </div>
                          <div className=" flex flex-col">
                            <p className="text-body-md md:text-body-lg font-bold">
                              Reviewer
                            </p>
                            <p className="text-body-sm">3 Minggu Lalu</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </NextLink>
                </React.Fragment>
              ))}
            </div>
          </CSSTransition>
        </SwitchTransition>
        <div className={styles.indicator}>
          {hotriview.map((_, index) => (
            <button
              key={index}
              className={clsx(styles.dot, {
                [styles.active]: index === activeSlide,
              })}
              onClick={() => handleChangeSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainHotReview

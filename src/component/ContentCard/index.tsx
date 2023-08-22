import styles from './index.module.scss'
import { Fragment, ReactNode } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import { dataContentYotube } from './api.youtube'
import YoutubeCard from '@/component/elements/YoutubeCard'
import useSlider from '@/hooks/useSlider'

type Props<T> = {
  dataContent: T[]
  title: string
  children: (items: T[]) => ReactNode
}

export default function ContentCard<T extends ContentReview>({
  dataContent,
  title,
  children,
}: Props<T>) {
  const { content, handlePrevOrNext, activeSlide } = useSlider(dataContent)

  return (
    <div className="relative flex flex-col gap-10 justify-center">
      <div className="flex gap-[44px] justify-between">
        <h1 className={styles.title}>{title}</h1>
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
            enter: `opacity-0 transition-all duration-500 ease-in-out`,
            enterActive: `opacity-100 transition-all duration-500 ease-in-out`,
            exit: 'opacity-100 transform scale-100 transition-all duration-500 ease-in-out',
            exitActive:
              'opacity-0 transform scale-90 transition-all duration-500 ease-in-out',
          }}
          timeout={500}
        >
          <div className={styles.gridCardItems}>{children(content)}</div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

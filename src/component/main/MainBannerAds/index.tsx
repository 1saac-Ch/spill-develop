import React, { useEffect, useRef, useState } from 'react'
import styles from "./index.module.scss";
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Image from "@/component/elements/NextImage";
import Promo from "@/assets/images/promo.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import clsx from 'clsx';
import { hotriview } from '@/component/pages/Home/dummy.api';

const MainBannerAds = () => {
  const [state, setState] = useState({
    activeSlide: 0,
  });

  const { activeSlide } = state;
  const nodeRef = useRef(activeSlide);
  const [slide, setSlide] = useState<string>();
  const [isHoverBannerAds, setIsHoverBannerAds] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => ({
        ...prev,
        activeSlide: (prev.activeSlide + 1) % hotriview.length,
        nodeRef: activeSlide,
      }));
    }, 5000);
    return () => clearInterval(interval);
  })

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
    }));
  };

  const handlePrevOrNext = (isNext: boolean) => {
    if (isNext) {
      setState((prev) => ({
        ...prev,
        activeSlide: (prev.activeSlide + 1) % hotriview.length,
        nodeRef: activeSlide,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        activeSlide: (prev.activeSlide - 1 + hotriview.length) % hotriview.length,
        nodeRef: activeSlide,
      }));
    }
  };
  return (
    <div className={styles.bannerAds}>
      <div className={styles.maxContainer}>
        <div className={styles.sliderAds} onMouseEnter={() => setIsHoverBannerAds(true)} onMouseLeave={() => setIsHoverBannerAds(false)}>
          {isHoverBannerAds &&
            <button className={styles.prev}>
              <ArrowBackIcon sx={{ color: 'white' }} />
            </button>
          }
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={activeSlide}
              classNames={{
                enter: `opacity-0 translate-x-[${slide}50%] transition-all duration-500 ease-out-in`,
                enterActive: `opacity-100 translate-x-[${slide}0] transition-all duration-500 ease-out-in`,
                exit: 'opacity-100 transform scale-100 transition-all duration-500 ease-out-in',
                exitActive: 'opacity-0 transform scale-90 transition-all duration-500 ease-out-in',
              }}
              timeout={500}>
              <Image src={Promo} layout="responsive" alt="test" />
            </CSSTransition>
          </SwitchTransition>
          {isHoverBannerAds &&
            <button className={styles.next}>
              <ArrowForwardIcon sx={{ color: 'white' }} />
            </button>
          }
        </div>
        <div className={styles.indicator}>
          {hotriview.map((item, index: number) => (
            <button key={index} className={clsx(styles.dot, { [styles.active]: index === activeSlide })} onClick={() => handleChangeSlide(index)} />
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default MainBannerAds
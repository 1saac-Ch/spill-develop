import { ReactElement, JSXElementConstructor } from 'react';
import MainLayout from '@/component/layouts/MainLayout';
import styles from "./index.module.scss";
import Search from "@/component/elements/Search";
import Card from "@/component/elements/Card";
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import React, { useState, useRef, useEffect } from 'react';
import Image from "@/component/elements/NextImage";
import Promo from "@/assets/images/promo.png";
import clsx from 'clsx';

import Footer from '@/component/layouts/Footer';
import { hotriview, feature1, feature2, artikel, youtube } from './dummy.api'

const Home = () => {
  const [state, setState] = useState({
    activeSlide: 0,
  });
  const { activeSlide } = state;
  const nodeRef = useRef(activeSlide);
  const [slide, setSlide] = useState<string>()

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => ({
        ...prev,
        activeSlide: (prev.activeSlide + 1) % hotriview.length,
        nodeRef: activeSlide,
      }));
    }, 300000);
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



  return (
    <>
      <div className="bg-radial w-full h-screen bg-[#111827]">
        <div className="mx-auto max-w-screen-xl h-full flex items-center">
          <div className={styles.wording}>
            <h1>Cari produk, Baca review, Checkout, lalu <label>Spill</label> disini.</h1>
            <p>Spill adalah tempat buat bantu kamu yang bingung mau checkout produk apa</p>
            <Search variant="wording" placeholder="Cari produk apapun" />
            <div className={styles.horizontalStack}>
              <div className={styles.keywordHeader}>
                Keyword Rekomendasi
              </div>
              <div className={styles.keywordHeader}>
                Keyword Rekomendasi
              </div>
              <div className={styles.keywordHeader}>
                Keyword Rekomendasi
              </div>
              <div className={styles.keywordHeader}>
                Keyword Rekomendasi
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center rounded-t-[64px] absolute top-[90%] pt-10 bg-white  
    px-[72px]">
        <div className="flex gap-[44px] justify-between">
          <h1 className={styles.title}>Hot Review.</h1>
          <div className={styles.line}>
            <div />
          </div>
          <div className="flex gap-[23px]">
            <div className={styles.dots} />
            <div className={styles.dots} />
          </div>
        </div>
        <div className="overflow-hidden">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={activeSlide}
              classNames={{
                enter: `opacity-0 translate-x-[${slide}50%] transition-all duration-500 ease-in-out`,
                enterActive: `opacity-100 translate-x-[${slide}0] transition-all duration-500 ease-in-out`,
                exit: 'opacity-100 transform scale-100 transition-all duration-500 ease-in-out',
                exitActive: 'opacity-0 transform scale-90 transition-all duration-500 ease-in-out',
              }}
              timeout={500}
            >

              <div className="flex gap-[44px] justify-between mt-[65px] mb-[60px]">
                {hotriview[activeSlide].card.map((item, index) => (
                  <Card key={index} >
                    {item.title}
                    {item.description}
                  </Card>
                ))
                }
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className={styles.indicator}>
          {hotriview.map((item, index) => (
            <button key={index} className={clsx(styles.dot, { [styles.active]: index === activeSlide })} onClick={() => handleChangeSlide(index)} />
          ))
          }
        </div>
        <div className="flex justify-center mt-[95px] w-screen py-10 bg-[#EEF8FC]">
          <div className="w-full py-3 max-w-screen-xl ">
            <h1 className={styles.title}>Feature.</h1>
            <div className="flex flex-wrap  justify-between p-5 mt-[40px]">
              {feature1.map((item, index) => (
                <Image placeholder='blur' key={index} src={item.image} width={378} height={344} alt="test" />
              ))}
            </div>
            <div className="flex flex-wrap justify-between p-5">
              {feature2.map((item, index) => (
                <Image placeholder='blur' key={index} src={item.image} width={378} height={344} alt="test" />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[90px]">
          <h1 className={styles.title}>Promo.</h1>
          <div className="overflow-hidden mt-[40px] mb-[60px] flex items-center">
            <button className={styles.prev}>prev</button>
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
                <Image src={Promo} width={1296} height={320} alt="test" />
              </CSSTransition>
            </SwitchTransition>
            <button className={styles.next}>next</button>
          </div>
          <div className={styles.indicator}>
            {hotriview.map((item, index) => (
              <button key={index} className={clsx(styles.dot, { [styles.active]: index === activeSlide })} onClick={() => handleChangeSlide(index)} />
            ))
            }
          </div>
        </div>
        <div className="mt-[108px]">
          <h1 className={styles.title}>Artikel.</h1>
          <div className="flex justify-between gap-[20px] mt-[40px]">
            {artikel.map((item: any, index: number) => {
              if (index === 0) {
                return (
                  <div key={index} className="flex flex-col gap-[40px] py-[40px] px-[40px] rounded-[20px] shadow-[0px_4px_16px_rgba(77,77,77,0.12)]">
                    <Image src={item.image} width={620} height={496} alt="test" />
                    <div className="flex flex-col gap-[20px]">
                      <h1 className={styles.artikelTitle}>{item.title}</h1>
                      <p className={styles.artikelDescription}>{item.description}</p>
                    </div>
                  </div>
                )
              } else {
                return (
                  <div key={index} className="flex flex-col gap-[20px]">
                    {item.card.map((item: any, index: number) => (
                      <div key={index} className="flex gap-[40px] py-[40px] px-[40px] rounded-[20px] shadow-[0px_4px_16px_rgba(77,77,77,0.12)]">
                        <Image src={item.image} width={200} height={200} alt="test" />
                        <div className="flex flex-col ">
                          <h1 className={styles.artikelTitle}>{item.title}</h1>
                          <p className={styles.artikelDescription}>{item.description}</p>
                        </div>
                      </div>
                    ))
                    }
                  </div>
                )
              }
            })}

          </div>
        </div>
        <div className="mt-[110px]">
          <h1 className={styles.title}>Konten Youtube.</h1>
          <div className="flex gap-[20px] mt-[40px] mb-20">
            {youtube.map((item, index) => (
              <div key={index} className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[40px]">
                  <Image src={item.image} width={404} height={228} alt="test" />
                  <div className="flex flex-col ">
                    <h1 className={styles.artikelTitle}>{item.title}</h1>
                    <p className={styles.artikelDescription}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

Home.getLayout = (page: ReactElement<any, string | JSXElementConstructor<any>>) =>
  <MainLayout>{page}</MainLayout>;

export default Home;
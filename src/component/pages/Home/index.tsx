import { ReactElement, JSXElementConstructor } from 'react';
import MainLayout from '@/component/layouts/MainLayout';
import styles from "./index.module.scss";
import Search from "@/component/elements/Search";
import Button from '@/component/elements/Button';
import Card from "@/component/elements/Card";
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import React, { useState, useRef, useEffect } from 'react';
import Image from "@/component/elements/NextImage";
import Promo from "@/assets/images/promo.png";
import clsx from 'clsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { hotriview, feature1, feature2, artikel, youtube } from './dummy.api'
import UseDisclosure from '@/component/elements/UseDisclosure';
import MainHotReview from '@/component/main/MainHotReview';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';
import Modal from '@/component/elements/Modal';


const Home = () => {
  const router = useRouter()
  const [state, setState] = useState({
    activeSlide: 0,
  });
  const { activeSlide } = state;
  const nodeRef = useRef(activeSlide);
  const [slide, setSlide] = useState<string>();
  const [isHoverBannerAds, setIsHoverBannerAds] = useState<boolean>(false);

  const { onOpen: onOpenSearch, onClose: onCloseSearch, isOpen: isOpenSearch } = UseDisclosure();

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
    <main>
      <div className="bg-radial bg-[#111827] w-full h-[90vh] ">
        <div className="mx-auto h-full flex items-center">
          <div className={styles.wording}>
            <h1>Cari produk, Baca review, Checkout, lalu <label>Spill</label> disini.</h1>
            <p>Spill adalah tempat buat bantu kamu yang bingung mau checkout produk apa</p>
            <Search variant="wording" placeholder="Cari produk apapun" onClick={onOpenSearch} />
            <Modal isOpen={isOpenSearch} onClose={onCloseSearch}>
              <div className="text-center w-max border-2 boder-black bg-white p-7 rounded-xl">
                <h2 className="text-2xl font-bold">Cari Produk Untuk Di Review</h2>
                <p className="mb-4">
                  Cari produk yang akan kamu review
                </p>
                <Search placeholder="Cari produk apapun" />
                <div className=' mt-5 shadow-md flex flex-col justify-start p-4 gap-4'>
                  <h3 className='w-max font-semibold'>🔥 Produk Paling Banyak Dicari:</h3>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                      <div>
                        <SearchIcon />
                      </div>
                      <h4>headphone Steelseries Mxasa</h4>
                    </div>
                    <Button variant="outline" onClick={() => router.push('/review-product')}>Tulis Review</Button>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                      <div>
                        <SearchIcon />
                      </div>
                      <h4>headphone Steelseries Mxasa</h4>
                    </div>
                    <Button variant="outline">Tulis Review</Button>
                  </div>
                </div>
              </div>
            </Modal>
            <div className={styles.horizontalStack}>
              <div className={styles.keywordHeader}>
                Handphone Murah
              </div>
              <div className={styles.keywordHeader}>
                Skincare
              </div>
              <div className={styles.keywordHeader}>
                Iphone 13 Pro
              </div>
              <div className={styles.keywordHeader}>
                Kamera Terbaik
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainHotReview />
      <div className={styles.feature}>
        <div className={styles.maxContainer}>
          <h1 className={styles.titleContent}>Feature.</h1>
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
      <div className={styles.article}>
        <div className={styles.maxContainer}>
          <h1 className={styles.titleContent}>Artikel.</h1>
          <div className="flex flex-col px-5 gap-[20px] mt-[40px] md:flex-row md:px-0">
            {artikel.map((item: any, index: number) => {
              if (index === 0) {
                return (
                  <div key={index} className="flex flex-1  flex-col rounded-[20px] shadow-[0px_4px_16px_rgba(77,77,77,0.12)]">
                    <div className='flex-1'>
                      <Image src={item.image} alt="test" layout="responsive"
                        className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col gap-5 p-8">
                      <h1 className={styles.artikelTitle}>{item.title}</h1>
                      <p className={styles.artikelDescriptionFirst}>{item.description}</p>
                      <div className='flex-grow flex items-end'>
                        <p className='text-[#F22178] font-semibold w-max '>Lihat Selengkapnya...</p>
                      </div>
                    </div>
                  </div>
                )
              } else {
                return (
                  <div key={index} className="flex flex-col flex-1 justify-between gap-5">
                    {item.card.map((item: any, index: number) => (
                      <div key={index} className="flex overflow-hidden items-stretch rounded-[20px] shadow-[0px_4px_16px_rgba(77,77,77,0.12)]">
                        <Image src={item.image} width={200} height={200} alt="test" />
                        <div className="flex flex-col p-6">
                          <h1 className={styles.artikelTitle}>{item.title}</h1>
                          <p className='text-xxmedium leading-[24px] font-[400] font-satoshi text-dark line-clamp-4'>{item.description}</p>
                          <div className='flex-grow flex items-end'>
                            <p className='text-[#F22178] font-semibold w-max '>Lihat Selengkapnya...</p>
                          </div>
                        </div>
                      </div>
                    ))
                    }
                  </div>
                )
              }
            })}
          </div>
          <div className='flex justify-center my-7'>
            <Button variant="outline">Artikel Lainnya</Button>
          </div>
        </div>
      </div>
      <div className={styles.maxContainer}>
        <div className="flex gap-[44px]">
          <h1 className={styles.title}>Konten Review Pilihan.</h1>
          <div className={styles.line}>
            <div />
          </div>
          <div className="flex gap-6">
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
              <Card key={i}>
                <div className="py-2 h-full flex flex-col p-6 gap-2 ">
                  <div
                    className="flex-grow font-tebal text-lg items-stretch  "
                  >
                    {item.title}
                  </div>
                  <div
                    className="flex-grow font-tebal text-lg items-stretch  "
                  >
                    <p className="line-clamp-3 text-justify text-xxmedium leading-[24px] font-[400] font-satoshi text-dark">
                      {item.description}
                    </p>
                  </div>

                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

Home.getLayout = (page: ReactElement<any, string | JSXElementConstructor<any>>) =>
  <MainLayout>{page}</MainLayout>;

export default Home;
import styles from './index.module.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import ProductCard from '@/component/catalogue/ProductCard'
import ComputerImage from '@/assets/images/computer.jpg'
import { dataRecomendationProduct } from './recomendation.api'
import useSlider from '@/hooks/useSlider'

const MainRecomendationProduct = () => {
  const { content, handlePrevOrNext, activeSlide } = useSlider(
    dataRecomendationProduct,
    5
  )

  return (
    <div className="relative flex justify-center w-screen pb-10 mt-[80px] lg:mt-[88px]">
      <div className="main-container w-full">
        <div className="flex gap-[44px] justify-between">
          <h1 className={styles.title}>Rekomendasi Produk</h1>
          <div className={styles.line}>
            <div />
          </div>
          <div className="flex gap-[23px]">
            <div
              className={styles.dots}
              onClick={() => handlePrevOrNext(false)}
            >
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
            <div className={styles.gridCardItems}>
              {content.map((item, i) => (
                <ProductCard
                  id="1"
                  key={i}
                  image={'/computer.jpg'}
                  title="Sony VM-1000x Wireless Headphone Bluetooth"
                  review={32}
                  rate={4.8}
                  production="Sony"
                  minPrize={1000000}
                  maxPrize={1430000}
                />
              ))}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  )
}

export default MainRecomendationProduct

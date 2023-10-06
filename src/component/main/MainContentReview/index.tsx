import styles from './index.module.scss'
import Card from '@/component/elements/Card'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import useSlider from '@/hooks/useSlider'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

const MainContentReview = ({ contentReview }: { contentReview: Product[] }) => {
  const { content, handlePrevOrNext, activeSlide } = useSlider(contentReview)
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
      <div className={styles.contentReview}>
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
                <Card
                  imgUrl={JSON.parse(item.images)[0]}
                  key={i}
                  imgHeight={'h-[228px]'}
                >
                  <div className="h-full flex flex-col p-4 gap-2 ">
                    <h6 className="text-title-md md:text-title-lg md:font-[700px] truncate font-[600]">
                      {item.product_title}
                    </h6>
                    <div className="flex-grow font-tebal text-lg items-stretch  ">
                      <p className="text-body-md md:text-body-lg"> </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </section>
  )
}

export default MainContentReview

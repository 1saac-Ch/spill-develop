import { useEffect, useState } from 'react'

import NextLink from 'next/link'
import MainLayout from '@/component/layouts/MainLayout'
import Image from '@/component/elements/NextImage'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import RatingStar from '@/component/elements/RatingStar'
import formatCurrency from '@/utils/formatCurrency'

import Tokopedia from '@/assets/images/tokopedia.png'
import Bukalapak from '@/assets/images/bukalapak.png'
import Lazada from '@/assets/images/lazada.png'
import ArrowRightIcon from '@/component/elements/Icons/ArrowRight'
import DiscussionSection from './DiscussionSection'
import MainRecomendationProduct from '@/component/main/MainRecomendation'
import { useRouter } from 'next/router'
import { Dialog } from '@/component/ui/Dialog'
import { DialogTrigger } from '@/component/ui/Dialog'
import { DialogContent } from '@/component/ui/Dialog'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const DetailProduct = ({ product }: { product: Product }) => {
  const [isSticky, setIsSticky] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const router = useRouter()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  const ProductImages = product.images

  const handlePrevClick = () => {
    if (activeImageIndex === 0) {
      setActiveImageIndex(ProductImages.length - 1)
    } else {
      setActiveImageIndex((prev) => prev - 1)
    }
  }

  const handleNextClick = () => {
    if (activeImageIndex === ProductImages.length - 1) {
      setActiveImageIndex(0)
    } else {
      setActiveImageIndex((prev) => prev + 1)
    }
  }

  return (
    <>
      <div className="bg-[#F8F8F8]">
        <div className="w-full main-container flex flex-col gap-6 mb-4">
          <div className="mt-8 cursor-pointer w-max pr-2">
            <NextLink href="/" passHref className="flex gap-2 items-center ">
              <KeyboardBackspaceIcon fontSize="large" />
              <h1 className="text-headline-sm font-bold tracking-[0.01px]">
                Detail Produk
              </h1>
            </NextLink>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 p-6 md:p-9 bg-white rounded-[20px] rounded-b-xl shadow-[0px_4px_16px_rgba(77,77,77,0.12)]">
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex flex-col gap-[10px]">
                  {product.images.slice(0, 1).map((image, index) => {
                    return (
                      <div
                        key={index}
                        className="cursor-pointer h-max rounded-[8.16px] overflow-hidden "
                      >
                        <Image
                          src={image.image_product}
                          width={272}
                          height={272}
                          alt="Picture of the author depdep"
                          placeholder="blur"
                          className="hover:scale-105 ease-in duration-300 object-cover w-full h-full aspect-square md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] opacity-90"
                        />
                      </div>
                    )
                  })}
                  <div className="flex gap-[10px] justify-between">
                    {product.images.slice(1, 4).map((image, index) => {
                      return (
                        <div
                          key={index + 1}
                          className=" cursor-pointer md:m-0 h-max overflow-hidden rounded-xl"
                        >
                          <Image
                            src={image.image_product}
                            width={88}
                            height={3.1}
                            alt="Picture of the author depdep"
                            placeholder="blur"
                            className="hover:scale-105 ease-in duration-300 object-cover w-[88px] h-[88px] opacity-90"
                          />
                        </div>
                      )
                    })}
                    {product.images.slice(4, 5).map((image, index) => {
                      return (
                        <div
                          key={index + 1}
                          className=" cursor-pointer md:m-0 h-max overflow-hidden rounded-xl"
                        >
                          <Image
                            src={image.image_product}
                            width={88}
                            height={3.1}
                            alt="Picture of the author depdep"
                            placeholder="blur"
                            className="hover:scale-105 ease-in duration-300 object-cover w-[88px] h-[88px] opacity-90"
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="w-[80vw] h-[600px] overflow-y-scroll max-w-[1220px] mx-auto bg-white flex flex-col md:flex-row gap-10 p-10 rounded-[20px]">
                <div className="flex items-center justify-center gap-5 flex-1">
                  <button
                    onClick={handlePrevClick}
                    className="w-[30px] h-[30px] md:w-[52px] md:h-[52px] rounded-full bg-black cursor-pointer flex justify-center items-center"
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
                  </button>
                  <Image
                    src={ProductImages[activeImageIndex].image_product}
                    alt="product-image"
                    width={600}
                    height={600}
                    className="w-full h-full md:w-[600px] md:h-[600px] rounded-xl"
                  />
                  <button
                    onClick={handleNextClick}
                    className="w-[30px] h-[30px] md:w-[52px] md:h-[52px] rounded-full bg-black cursor-pointer flex justify-center items-center"
                  >
                    <ArrowForwardIcon
                      sx={{
                        color: 'white',
                        padding: {
                          xs: '4px',
                          md: '0px',
                        },
                      }}
                    />
                  </button>
                </div>

                <div className="flex flex-col gap-6 w-[296px]">
                  <h3 className="text-headline-sm font-satoshi font-bold">
                    Sony WM-1000x
                  </h3>

                  <div className="grid grid-cols-3 gap-x-4 gap-y-7">
                    {ProductImages.map((img, i) => (
                      <Image
                        key={i}
                        src={img.image_product}
                        alt="product-img"
                        width={50}
                        height={50}
                        onClick={() => setActiveImageIndex(i)}
                        className={`w-full h-full rounded-xl cursor-pointer ${
                          i === activeImageIndex
                            ? 'border-2 border-[#1598CC] '
                            : ''
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <div className="flex flex-col flex-[1.2] gap-10 md:gap-6">
              <div className="flex flex-col md:flex-row gap-3 md:items-center text-abu2 text-small font-satoshi">
                <div className="border-r-[1px] border-abu2 flex gap-3 pr-3">
                  <RatingStar sizeIcon={19} rating={4} />
                  <p className="font-bold text-sm">{product.rating}</p>
                </div>
                <div className="flex gap-[8.8px]">
                  <p className="text-sm font-bold md:font-normal tracking-[0.1px] leading-5">
                    {product.review} Review
                  </p>
                  <p className="text-sm font-bold md:font-normal tracking-[0.1px] leading-5">
                    {product.disscuss} Diskusi
                  </p>
                  <p className="text-sm font-bold md:font-normal tracking-[0.1px] leading-5">
                    {product.view_product} Dilihat
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-title-lg md:text-headline-sm font-bold font-satoshi">
                  {product.title_name}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#705CF6]" />
                  <p className="text-title-md md:text-body-lg md:font-normal tracking-[0.5px] font-bold">
                    {product.brand}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center text-medium font-satoshi font-tebal text-pink">
                <p className="text-headline-sm font-bold">
                  Rp. {formatCurrency(product.min_price)}
                </p>
                <span>-</span>
                <p className="text-headline-sm font-bold">
                  Rp. {formatCurrency(product.max_price)}
                </p>
              </div>
              <p className="text-body-lg md:text-title-md">
                {product.description}
              </p>
              <button className="font-tebal text-blue-50 w-fit">
                Lihat detail
              </button>
            </div>
          </div>
        </div>
        <DiscussionSection />
        <MainRecomendationProduct />
        <div
          className={
            isSticky
              ? 'sticky bottom-0 z-50 transition-all ease-in duration-300 w-full bg-white p-5 lg:px-[72px] lg:py-6 shadow-[0px_4px_16px_rgba(77,77,77,0.12)] font-satoshi'
              : 'bg-white p-5 lg:px-[72px] lg:py-6 shadow-[0px_4px_16px_rgba(77,77,77,0.12)] font-satoshi transition-all ease-in duration-300'
          }
        >
          <div className="flex items-center justify-between md: gap-8 w-full">
            <div className="flex flex-none w-[180px] h-11 md:h-auto shadow-[0px_4px_16px_rgba(77,77,77,0.12)] rounded-xl md:w-[372px] md:gap-3">
              {product.images.map((image, index) => {
                if (index === 0) {
                  return (
                    <div
                      key={index}
                      className="w-11 md:w-[120px] md:h-[120px] cursor-pointer rounded-xl overflow-hidden flex-none"
                    >
                      <Image
                        src={image.image_product}
                        width={44}
                        height={44}
                        alt="Picture of the author depdep"
                        placeholder="blur"
                        className="object-cover full h-11 md:w-[120px] md:h-[120px] opacity-90"
                      />
                    </div>
                  )
                }
              })}
              <div className="flex flex-col justify-center gap-2 px-2">
                <div>
                  <h4 className="text-body-sm md:text-label-md font-bold line-clamp-2">
                    {product.title_name}
                  </h4>
                  <p className="hidden md:block text-label-md mt-1">
                    {product.brand}
                  </p>
                </div>
                <div className="hidden w-max md:flex gap-3 text-sm items-center font-satoshi md:text-label-md text-pink">
                  <p className=" text-label-md font-bold">
                    Rp. {formatCurrency(product.min_price)}
                  </p>
                  <span>-</span>
                  <p className=" text-label-md font-bold">
                    Rp. {formatCurrency(product.max_price)}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-max">
              <p className="text-body-xs md:text-body-lg">
                Checkout sekarang{' '}
                <span className="hidden md:inline">
                  di E-Commerce kesayanganmu
                </span>{' '}
                :
              </p>
              <div className="flex gap-3 md:gap-5">
                <div className="cursor-pointer flex border-2 border-[#EE4D2D] bg-[#FEEEEA] w-6 h-6 p-1 md:w-auto md:h-auto md:py-2 md:px-3 md:rounded-xl rounded-[6px]">
                  <div className="flex items-center gap-3 w-full h-full">
                    <Image
                      src="/icons/shopee.svg"
                      alt="shopee"
                      width={24}
                      height={24}
                      className="md:w-7 md:h-7"
                    />
                    <div className="hidden xl:flex gap-2">
                      <span className="font-tebal">Shopee</span>
                      <ArrowRightIcon color="#EE4D2D" />
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer flex border-2 border-[#5FB74E] bg-[#FEEEEA] w-6 h-6 md:w-auto p-1 rounded-[6px] md:h-auto md:py-2 md:px-3 md:rounded-xl">
                  <div className="flex items-center gap-3">
                    <Image
                      src={Tokopedia}
                      alt="tokopedia"
                      width={24}
                      height={24}
                    />

                    <div className="hidden xl:flex gap-2">
                      <span className="font-tebal">Tokopedia</span>
                      <ArrowRightIcon color="#5FB74E" />
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer flex border-2 border-[#E31E52] bg-[#FEEEEA] w-6 h-6 md:w-auto p-1 rounded-[6px] md:h-auto md:py-2 md:px-3 md:rounded-xl">
                  <div className="flex items-center gap-3 ">
                    <Image
                      src={Bukalapak}
                      alt="BukalapakLogo"
                      width={24}
                      height={24}
                    />
                    <div className="hidden xl:flex gap-2">
                      <span className="font-tebal">Bukalapak</span>
                      <ArrowRightIcon color="#E31E52" />
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer flex border-2 border-[#F99B00] bg-[#FEEEEA] w-6 h-6 md:w-auto p-1 rounded-[6px] md:h-auto md:py-2 md:px-3 md:rounded-xl">
                  <div className="flex items-center gap-3">
                    <Image src={Lazada} alt="lazada" width={24} height={24} />

                    <div className="hidden xl:flex gap-2">
                      <span className="font-tebal">Lazada</span>
                      <ArrowRightIcon color="#F99B00" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

DetailProduct.getLayout = (
  page:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
) => <MainLayout isNormal={true}>{page}</MainLayout>

export default DetailProduct

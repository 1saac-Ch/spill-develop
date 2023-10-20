import { useEffect, useState } from 'react'

import MainLayout from '@/component/layouts/MainLayout'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import RatingStar from '@/component/elements/RatingStar'
import formatCurrency from '@/utils/formatCurrency'

import ArrowRightIcon from '@/component/elements/Icons/ArrowRight'
import DiscussionSection from './DiscussionSection'
// import MainRecomendationProduct from '@/component/main/MainRecomendation'
import { useRouter } from 'next/router'
import RobotNotFound from '@/assets/images/robot.png'

// import { Dialog } from '@/component/ui/Dialog'
// import { DialogTrigger } from '@/component/ui/Dialog'
// import { DialogContent } from '@/component/ui/Dialog'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack'
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Image from 'next/image'
import Button from '@/component/elements/Button/component'
import Link from 'next/link'

const borderAffiliateComponent = {
  Tokopedia: '#5FB74E ',
  Shopee: '#EE4D2D',
  Lazada: '#E31E52',
  Bukalapak: '#F99B00',
}

function NotFound() {
  const router = useRouter()
  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col md:flex-row items-center gap-10 py-6 px-10 bg-white rounded-[20px]">
        <Image
          src={RobotNotFound}
          alt="robot-not-found"
          className="w-[200px] h-[200px] object-cover flex-none"
        />

        <div className="flex flex-col gap-4 font-satoshi">
          <h2 className="text-title-lg font-bold">
            Yah... Produk Kamu Ngga Ketemu nih
          </h2>

          <div className="flex gap-4">
            <Button
              onClick={() => router.back()}
              className="bg-pink rounded-xl text-label-lg text-white font-satoshi py-3 px-4 max-w-fit"
            >
              Kembali
            </Button>
            <Link
              href="https://forms.gle/ZTrPGMwSpAZtrE9V6"
              target="_blank"
              className="bg-transparent border border-pink rounded-xl text-label-lg text-pink font-satoshi py-3 px-4 max-w-fit"
            >
              Sarankan Produk
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function AffiliateComponent({ ecommerce_name, affiliate_link }: Affiliate) {
  const color = borderAffiliateComponent[ecommerce_name]
  return (
    <div
      style={{
        border: `1px solid ${color}`,
      }}
      className="cursor-pointer flex border-2 bg-[#FEEEEA] w-6 h-6 p-1 md:w-auto md:h-auto md:py-2 md:px-3 md:rounded-xl rounded-[6px] relative"
    >
      <div className="flex items-center gap-3 w-full h-full">
        <img
          src={`/icons/${ecommerce_name.toLowerCase()}.svg`}
          alt="shopee"
          width={24}
          height={24}
          className="md:w-7 md:h-7"
        />
        <div className="hidden xl:flex gap-2">
          <span className="font-tebal">{ecommerce_name}</span>
          <ArrowRightIcon color={color} />
        </div>
      </div>

      <Link
        className="absolute inset-0"
        target="_blank"
        href={affiliate_link}
      />
    </div>
  )
}

const DetailProduct = ({
  product,
  notFound,
  affiliate,
}: {
  product: Product
  notFound: boolean
  affiliate: Affiliate[]
}) => {
  const [isSticky, setIsSticky] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const ProductImages = product.images

  // const handlePrevClick = () => {
  //   if (activeImageIndex === 0) {
  //     setActiveImageIndex(ProductImages.length - 1)
  //   } else {
  //     setActiveImageIndex((prev) => prev - 1)
  //   }
  // }

  // const handleNextClick = () => {
  //   if (activeImageIndex === ProductImages.length - 1) {
  //     setActiveImageIndex(0)
  //   } else {
  //     setActiveImageIndex((prev) => prev + 1)
  //   }
  // }

  if (notFound)
    return (
      <div className="main-container">
        <NotFound />
      </div>
    )

  const Images = JSON.parse(product.images) as string[]

  return (
    <>
      <div className="bg-[#F8F8F8]">
        <div className="w-full main-container flex flex-col gap-6 mb-4">
          <div className="mt-8 cursor-pointer w-max pr-2 text-headline-sm">
            <button
              onClick={() => router.back()}
              className="flex gap-2 items-center "
            >
              <KeyboardBackspaceIcon fontSize="inherit" />
              <h1 className="text-headline-sm font-bold tracking-[0.01px]">
                Detail Produk
              </h1>
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 p-6 md:p-9 bg-white rounded-[20px] rounded-b-xl shadow-[0px_4px_16px_rgba(77,77,77,0.12)]">
            <div className="flex flex-col gap-[10px]">
              {Images.slice(0, 1).map((image, index) => {
                return (
                  <div
                    key={index}
                    className="h-max rounded-[8.16px] overflow-hidden "
                  >
                    <img
                      src={image}
                      alt="Picture of the author depdep"
                      className="object-cover w-full h-full aspect-square md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]"
                    />
                  </div>
                )
              })}
              <div className="flex gap-[10px] justify-between">
                {Images.slice(1, 4).map((image, index) => {
                  return (
                    <div
                      key={index + 1}
                      className="md:m-0 h-max overflow-hidden rounded-xl"
                    >
                      <img
                        src={image}
                        width={88}
                        height={3.1}
                        alt="Picture of the author depdep"
                        className="hover:scale-105 ease-in duration-300 object-cover w-[88px] h-[88px] opacity-90"
                      />
                    </div>
                  )
                })}
                {Images.slice(4, 5).map((image, index) => {
                  return (
                    <div
                      key={index + 1}
                      className="md:m-0 h-max overflow-hidden rounded-xl"
                    >
                      <img
                        src={image}
                        width={88}
                        height={3.1}
                        alt="Picture of the author depdep"
                        className="hover:scale-105 ease-in duration-300 object-cover w-[88px] h-[88px] opacity-90"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
            {/* <Dialog>
              <DialogTrigger asChild>
               
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
                  <img
                    src={JSON.parse(product.images)[0]}
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
                    {Images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
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
            </Dialog> */}

            <div className="flex flex-col flex-[1.2] gap-10 md:gap-6">
              <div className="flex flex-col md:flex-row gap-3 md:items-center text-abu2 text-small font-satoshi">
                <div className="border-abu2 flex gap-3 pr-3">
                  {/* <RatingStar sizeIcon={19} rating={4} /> */}
                  {/* <p className="font-bold text-sm">{product?.rating ?? 0}</p> */}
                </div>
                {/* <div className="flex gap-[8.8px]">
                  <p className="text-sm font-bold md:font-normal tracking-[0.1px] leading-5">
                    0 Review
                  </p>
                  <p className="text-sm font-bold md:font-normal tracking-[0.1px] leading-5">
                    0
                  </p>
                  <p className="text-sm font-bold md:font-normal tracking-[0.1px] leading-5">
                    0 Dilihat
                  </p>
                </div> */}
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-title-lg md:text-headline-sm font-bold font-satoshi">
                  {product.product_title}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#705CF6]" />
                  <p className="text-title-md md:text-body-lg md:font-normal tracking-[0.5px] font-bold">
                    {product.brand}
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 lg:items-center text-medium font-satoshi font-tebal text-pink">
                <p className="text-headline-sm font-bold">
                  Rp. {formatCurrency(product.price_min)}
                  <span> -</span>
                </p>
                <p className="text-headline-sm font-bold">
                  Rp. {formatCurrency(product.price_max)}
                </p>
              </div>
              <p className="text-body-lg md:text-title-md">
                {product.description}
              </p>
            </div>
          </div>
        </div>
        <DiscussionSection productId={product.product_id} />
        {/* <MainRecomendationProduct /> */}

        {/* FOOTER */}
        <div
          className={
            isSticky
              ? 'sticky bottom-0 z-50 transition-all ease-in duration-300 w-full bg-white p-5 lg:px-[72px] lg:py-6 shadow-[0px_4px_16px_rgba(77,77,77,0.12)] font-satoshi'
              : 'bg-white p-5 lg:px-[72px] lg:py-6 shadow-[0px_4px_16px_rgba(77,77,77,0.12)] font-satoshi transition-all ease-in duration-300'
          }
        >
          <div className="flex items-center justify-between md: gap-8 w-full">
            <div className="flex flex-none w-[180px] h-11 md:h-auto shadow-[0px_4px_16px_rgba(77,77,77,0.12)] rounded-xl md:w-[372px] md:gap-3">
              {Images.map((image, index) => {
                if (index === 0) {
                  return (
                    <div
                      key={index}
                      className="w-11 md:w-[120px] md:h-[120px] cursor-pointer rounded-xl overflow-hidden flex-none"
                    >
                      <img
                        src={image}
                        width={44}
                        height={44}
                        alt="Picture of the author depdep"
                        className="object-cover full h-11 md:w-[120px] md:h-[120px] opacity-90"
                      />
                    </div>
                  )
                }
              })}
              <div className="flex flex-col justify-center gap-2 px-2">
                <div>
                  <h4 className="text-body-sm md:text-label-md font-bold line-clamp-2">
                    {product.product_title}
                  </h4>
                  <p className="hidden md:block text-label-md mt-1">
                    {product.brand}
                  </p>
                </div>
                <div className="hidden w-max md:flex gap-3 text-sm items-center font-satoshi md:text-label-md text-pink">
                  <p className=" text-label-md font-bold">
                    Rp. {formatCurrency(product.price_min)}
                  </p>
                  <span>-</span>
                  <p className=" text-label-md font-bold">
                    Rp. {formatCurrency(product.price_max)}
                  </p>
                </div>
              </div>
            </div>

            {affiliate.length ? (
              <div className="flex flex-col gap-2 w-max">
                <p className="text-body-xs md:text-body-lg">
                  Checkout sekarang{' '}
                  <span className="hidden md:inline">
                    di E-Commerce kesayanganmu
                  </span>{' '}
                  :
                </p>
                <div className="flex gap-3 md:gap-5">
                  {affiliate.map((aff) => (
                    <AffiliateComponent key={aff.affiliate_id} {...aff} />
                  ))}
                </div>
              </div>
            ) : null}
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

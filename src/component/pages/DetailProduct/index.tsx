import React from 'react'
import MainLayout from '@/component/layouts/MainLayout';
import Image from "@/component/elements/NextImage";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import RatingStar from '@/component/elements/RatingStar';
import { product } from './dummy.api';
import formatCurrency from '@/utils/formatCurrency';
import { BukalapakLogo, LazadaLogo, ShoopeLogo, TokopediaLogo } from '@/component/elements/EcommerceLogo';
import ArrowRightIcon from '@/component/elements/Icons/ArrowRight';

const DetailProduct = () => {


    return (
        <div className='bg-[#F8F8F8]'>
            <div className='container mx-auto py-5 flex flex-col gap-10'>
                <div className=' cursor-pointer flex gap-2 items-center w-max pr-2'>
                    <KeyboardBackspaceIcon fontSize="large" />
                    <h1 className='font-tebal text-2xl'>Detail Produk</h1>
                </div>
                <div className='flex flex-col md:flex-row gap-8  p-9 bg-white rounded-b-xl shadow-[0px_4px_16px_rgba(77,77,77,0.12)]' >
                    <div className=' flex flex-col'>
                        {product.images.map((image, index) => {
                            if (index === 0) {
                                return (
                                    <div key={index} className=' cursor-pointer m-5 md:m-0 h-max rounded-xl overflow-hidden '>
                                        <Image src={image.image_product} width={300}
                                            height={3.1}
                                            alt="Picture of the author depdep"
                                            placeholder="blur"
                                            className="hover:scale-105 ease-in duration-300 object-cover w-96 h-96 opacity-90" />
                                    </div>
                                )
                            }
                        })}
                        <div className='mt-5 flex gap-2'>
                            {product.images.slice(1, 4).map((image, index) => {
                                return (
                                    <div key={index + 1} className=' cursor-pointer m-5 md:m-0 h-max overflow-hidden rounded-xl'>
                                        <Image src={image.image_product} width={88}
                                            height={3.1}
                                            alt="Picture of the author depdep"
                                            placeholder="blur"
                                            className="hover:scale-105 ease-in duration-300 object-cover w-[88px] h-[88px] opacity-90" />
                                    </div>
                                )
                            })}
                            {product.images.slice(4, 5).map((image, index) => {
                                return (
                                    <div key={index + 4} className=' cursor-pointer relative m-5 md:m-0 h-max overflow-hidden rounded-xl bg-black '>
                                        <div className='text-white absolute z-10 border-2 border-white w-full h-full flex justify-center items-center font-'>
                                            5+
                                        </div>
                                        <Image src={image.image_product} width={88}
                                            height={3.1}
                                            alt="Picture of the author depdep"
                                            placeholder="blur"
                                            className="hover:scale-105 ease-in duration-300 object-cover w-[88px] h-[88px] opacity-70" />
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <div className='flex flex-col flex-[1.2] gap-5 '>
                        <div className='flex gap-3 items-center text-abu2 text-small font-satoshi'>
                            <div className='border-r-[1px] border-abu2 flex gap-3 pr-3'>
                                <RatingStar sizeIcon={19} rating={4} />
                                <div>{product.rating}</div>
                            </div>
                            <div>{product.review} Review</div>
                            <div>{product.disscuss} Diskusi</div>
                            <div>{product.view_product} Dilihat</div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-medium font-tebal font-satoshi'>{product.title_name}</div>
                            <div className='flex gap-2'>
                                <div>Avatar</div>
                                <div>{product.brand}</div>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center text-medium font-satoshi font-tebal text-pink'>
                            <div>Rp. {formatCurrency(product.min_price)}</div>
                            <span>-</span>
                            <div>Rp. {formatCurrency(product.max_price)}</div>
                        </div>
                        <p className='line-clamp-2'>
                            {product.description}
                        </p>
                        <div className='font-tebal text-blue-50'>Lihat detail</div>
                    </div>
                </div>
            </div>
            <div className=' bg-white py-6 shadow-[0px_4px_16px_rgba(77,77,77,0.12)] font-satoshi'>
                <div className='container mx-auto'>
                    <div className='flex justify-between'>
                        <div className='flex shadow-[0px_4px_16px_rgba(77,77,77,0.12)] rounded-xl'>
                            {product.images.map((image, index) => {
                                if (index === 0) {
                                    return (
                                        <div key={index} className=' cursor-pointer m-5 md:m-0 h-max rounded-xl overflow-hidden '>
                                            <Image src={image.image_product} width={300}
                                                height={3.1}
                                                alt="Picture of the author depdep"
                                                placeholder="blur"
                                                className="hover:scale-105 ease-in duration-300 object-cover w-28 h-28 opacity-90" />
                                        </div>
                                    )
                                }
                            })}
                            <div className='p-4 flex flex-col justify-around'>
                                <div className='text-sm font-tebal font-satoshi'>{product.title_name}</div>
                                <div className='text-sm font-satoshi'>{product.brand}</div>
                                <div className=' w-max flex gap-3 text-sm items-center font-satoshi font-tebal text-pink'>
                                    <div>Rp. {formatCurrency(product.min_price)}</div>
                                    <span>-</span>
                                    <div>Rp. {formatCurrency(product.max_price)}</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div>Checkout sekarang di E-Commerce kesayanganmu :</div>
                            <div className='flex gap-3'>
                                <div className='border-2 border-[#EE4D2D] bg-[#FEEEEA] p-2 rounded-xl'>
                                    <div className='flex items-center gap-3 '>
                                        <ShoopeLogo />
                                        <span className='font-tebal'>Shopee</span>
                                        <ArrowRightIcon color='#EE4D2D'/>
                                    </div>
                                </div>
                                <div className='border-2 border-[#5FB74E] bg-[#EFF8EE] p-2 rounded-xl'>
                                    <div className='flex items-center gap-3 '>
                                        <TokopediaLogo />
                                        <span className='font-tebal'>Tokopedia</span>
                                        <ArrowRightIcon color='#5FB74E'/>
                                    </div>
                                </div>
                                <div className='border-2 border-[#E31E52] bg-[#FDE9EE]  p-2 rounded-xl'>
                                    <div className='flex items-center gap-3 '>
                                        <BukalapakLogo />
                                        <span className='font-tebal'>Bukalapak</span>
                                        <ArrowRightIcon color='#E31E52'/>
                                    </div>
                                </div>
                                <div className='border-2 border-[#F99B00] bg-[#FFF5E6] p-2 rounded-xl'>
                                    <div className='flex items-center gap-3'>
                                        <LazadaLogo />
                                        <span className='font-tebal'>Lazada</span>
                                        <ArrowRightIcon color='#F99B00'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

DetailProduct.getLayout = (page: React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) =>
    <MainLayout isNormal={true}>{page}</MainLayout>;

export default DetailProduct
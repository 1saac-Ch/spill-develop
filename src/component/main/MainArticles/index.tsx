import React from 'react'
import styles from "./index.module.scss";
import Image from "@/component/elements/NextImage";
import Button from '@/component/elements/Button';
import { artikel } from '@/component/pages/Home/dummy.api';

const MainArticles = () => {
    return (
        <section className={styles.article}>
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
        </section>
    )
}

export default MainArticles
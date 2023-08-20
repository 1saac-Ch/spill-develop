import React from 'react'
import styles from './index.module.scss'
import Image from '@/component/elements/NextImage'
import Button from '@/component/elements/Button'
import { artikel } from '@/component/pages/Home/dummy.api'
import { useRouter } from 'next/router'
import Link from 'next/link'

const MainArticles = () => {
  const router = useRouter()
  return (
    <section className={styles.article}>
      <div className={styles.maxContainer}>
        <h1 className={styles.titleContent}>Artikel.</h1>
        <div className="flex flex-col px-5 gap-[20px] md:gap-9 mt-[40px] md:flex-row md:px-0">
          {artikel.map((item: any, index: number) => {
            if (index === 0) {
              return (
                <div
                  key={index}
                  className="flex flex-col rounded-[20px] shadow-[0px_4px_16px_rgba(77,77,77,0.12)] max-w-[684px] mb-5 md:mb-0 min-h-full"
                >
                  <div className="">
                    {/* eslint-disable @next/next/no-img-element */}
                    <img
                      src={item.imgUrl}
                      alt="test"
                      className="w-full object-cover rounded-t-[18px]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1 md:gap-5 p-4 md:p-8">
                    <h1 className={styles.artikelTitle}>{item.title}</h1>
                    <p className={styles.artikelDescriptionFirst}>
                      {item.description}
                    </p>
                    <div className="flex-grow flex items-end">
                      <p className="text-[#F22178] font-satoshi w-max mt-4 text-label-md md:text-label-lg font-bold">
                        Lihat Selengkapnya...
                      </p>
                    </div>
                  </div>
                </div>
              )
            } else {
              return (
                <div
                  key={index}
                  className="flex flex-col max-w-full justify-between gap-5 md:gap-9"
                >
                  {item.card.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="h-[142px] md:h-[193px] max-w-full flex overflow-hidden rounded-[20px] shadow-[0px_4px_16px_rgba(77,77,77,0.12)]"
                    >
                      {/* eslint-disable @next/next/no-img-element */}
                      <img
                        src={item.imgUrl ?? item.image}
                        width={194}
                        height={194}
                        alt="test"
                        className="w-[142px] h-[142px] md:w-[194px] md:h-[194px] object-cover"
                      />
                      <div className="flex flex-col p-3 lg:p-10 w-full overflow-hidden">
                        <h1 className={styles.artikelTitle}>{item.title}</h1>
                        <p className="leading-[20px] font-[400] tracking-[0.25px] font-satoshi text-dark line-clamp-3 md:line-clamp-2 text-sm mb-2 md:text-body-lg md:mb-4">
                          {item.description}
                        </p>
                        <Link href={`/article/${item.id}`} className="flex">
                          <p className="text-[#F22178] font-semibold w-max text-label-md md:text-label-lg font-satoshi">
                            Lihat Selengkapnya...
                          </p>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )
            }
          })}
        </div>
        <div className="flex justify-center my-10">
          <Button onClick={() => router.push('/article')} variant="outline">
            Artikel Lainnya
          </Button>
        </div>
      </div>
    </section>
  )
}

export default MainArticles

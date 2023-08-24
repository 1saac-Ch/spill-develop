import MainLayout from '@/component/layouts/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { JSXElementConstructor, ReactElement } from 'react'
import Pagination from '@/component/ui/Pagination'
import RelatedArticle from '@/component/article/RelatedArticle'

function ArticleCard() {
  return (
    <article className="rounded-[20px] p-5 flex flex-col gap-5 bg-white shadow-sm lg:flex-row lg:gap-10">
      <div className="relative w-full h-[200px] lg:flex-1">
        <Image
          fill
          className="object-cover inset-0 rounded-[20px]"
          src={'/content.png'}
          alt="article-img"
        />
      </div>

      <div className="lg:flex-1 flex flex-col gap-2 lg:justify-between">
        <h1 className="text-title-lg font-bold font-satoshi lg:line-clamp-2">
          14 Strategi Efektif Mengembangkan Bisnis Menggunakan Digital Marketing
        </h1>
        <p className="text-body-lg font-satoshi line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          consequat pharetra risus, ac varius libero elementum eget. Curabitur
          eu aliquam ante, non sollicitudin magna. Vestibulum quis nulla nec
          nibh tempor feugiat.
        </p>

        <Link
          href={'/article/1'}
          className="text-[#F22178] font-semibold w-max inline-block font-satoshi"
        >
          Lihat selengkapnya...
        </Link>
      </div>
    </article>
  )
}

export default function Article() {
  const router = useRouter()
  return (
    <main className="bg-background">
      <div className="py-10 px-5 flex flex-col gap-5 lg:grid lg:grid-cols-[800px_1fr] lg:gap-8 max-w-[1296px] mx-auto">
        <div className="space-y-5">
          <h1 className="text-headline-sm font-[900] font-satoshi lg:mb-5">
            Artikel
          </h1>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <Pagination className="lg:justify-end" />
        </div>
        <div className="flex flex-col gap-5 lg:mt-0">
          <h3 className="text-left text-headline-sm font-satoshi font-[900]">
            Artikel
          </h3>
          <RelatedArticle />
          <RelatedArticle />
          <RelatedArticle />
          <RelatedArticle />
          <RelatedArticle />
        </div>

        <div className="relative aspect-[16/4] mt-6 mb-1 lg:col-span-2 lg:mt-[154px] lg:mb-[90px]">
          <Image
            fill
            src="/ads.png"
            alt="ads"
            className="inset-0 object-cover rounded-lg object-top"
          />
        </div>
      </div>
    </main>
  )
}

Article.getLayout = (
  page: ReactElement<any, string | JSXElementConstructor<any>>
) => <MainLayout isNormal={true}>{page}</MainLayout>

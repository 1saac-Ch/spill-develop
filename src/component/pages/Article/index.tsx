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
          src={
            'https://s3-alpha-sig.figma.com/img/0505/ebd6/965c841fb79dcd825119b469f829a2d1?Expires=1691366400&Signature=WC8pWadwDcBKr4xhRsm1vvjzQsr3FBtfSo34iRpc20FfwMAWgLXZXgAc2Ubc~~kLnMkajmTSmBJf2Cp8osc8MxwYWQw5jBvJdkwmSaQLvXh5MLtV~3Zl3JA2pa~LXt0XVYUySL7JDKOFZsn7NpLh1o5CvZ546T-fXJG1dTVgP4Bz0Xy1aSKDLD0wGgMiV1bpQVzKpvcv3SGA3KB0NlV~12H3lbZa-yHTb4TbFmdNipUSyTu~-ZvjlExCfibVmLjZjEDiaQ4g589luDZzV~4iqN6pwV8R8zx-~n5zvHDpyrkQmtQSoAWyFOTyfzRZpzxuBiYxmqIGHJnC89xK8TxkAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          }
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
      <main className="py-10 px-5 flex flex-col gap-5 lg:grid lg:grid-cols-[800px_1fr] lg:gap-8 max-w-[1296px] mx-auto">
        <div className="space-y-5">
          <h1 className="text-headline-sm font-[900] font-satoshi lg:mb-5">
            Artikel
          </h1>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <Pagination className="lg:justify-end" />
        </div>
        <div className="flex flex-col gap-5 mt-10 lg:mt-0">
          <h3 className="text-left text-headline-sm font-satoshi font-[900]">
            Artikel
          </h3>
          <RelatedArticle />
          <RelatedArticle />
          <RelatedArticle />
          <RelatedArticle />
          <RelatedArticle />
        </div>
      </main>
    </main>
  )
}

Article.getLayout = (
  page: ReactElement<any, string | JSXElementConstructor<any>>
) => <MainLayout isNormal={true}>{page}</MainLayout>

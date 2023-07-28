import MainLayout from '@/component/layouts/MainLayout'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { JSXElementConstructor, ReactElement } from 'react'

function ArticleCard() {
  return (
    <article className="rounded-[20px] p-5 flex flex-col gap-5 bg-white shadow-md">
      <div className="relative w-full h-[200px]">
        <Image
          fill
          className="object-cover inset-0 rounded-[20px]"
          src={
            'https://s3-alpha-sig.figma.com/img/0505/ebd6/965c841fb79dcd825119b469f829a2d1?Expires=1691366400&Signature=WC8pWadwDcBKr4xhRsm1vvjzQsr3FBtfSo34iRpc20FfwMAWgLXZXgAc2Ubc~~kLnMkajmTSmBJf2Cp8osc8MxwYWQw5jBvJdkwmSaQLvXh5MLtV~3Zl3JA2pa~LXt0XVYUySL7JDKOFZsn7NpLh1o5CvZ546T-fXJG1dTVgP4Bz0Xy1aSKDLD0wGgMiV1bpQVzKpvcv3SGA3KB0NlV~12H3lbZa-yHTb4TbFmdNipUSyTu~-ZvjlExCfibVmLjZjEDiaQ4g589luDZzV~4iqN6pwV8R8zx-~n5zvHDpyrkQmtQSoAWyFOTyfzRZpzxuBiYxmqIGHJnC89xK8TxkAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          }
          alt="article-img"
        />
      </div>

      <div className="space-y-2">
        <h1 className="text-title-lg font-bold font-satoshi">
          14 Strategi Efektif Mengembangkan Bisnis Menggunakan Digital Marketing
        </h1>
        <p className="text-body-lg font-satoshi">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          consequat pharetra risus, ac varius libero elementum eget. Curabitur
          eu aliquam ante, non sollicitudin magna. Vestibulum quis nulla nec
          nibh tempor feugiat.
        </p>

        <Link
          href={'#'}
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
    <main className="py-10 px-5 space-y-5 bg-background">
      <div className="flex gap-4 items-center">
        <h1 className="text-headline-sm font-[900] font-satoshi">Artikel</h1>
      </div>

      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />

      <div className="flex flex-col gap-5">
        <h3 className="text-left text-headline-sm font-bold mt-8">Artikel</h3>

        <RelatedArticle />
        <RelatedArticle />
        <RelatedArticle />
        <RelatedArticle />
        <RelatedArticle />
      </div>
    </main>
  )
}

function RelatedArticle() {
  return (
    <div className="p-5 flex items-center gap-5 rounded-[20px] shadow-lg bg-white">
      <div className="relative w-[60px] h-[60px] flex-none">
        <Image
          fill
          className="object-cover inset-0 rounded-[8px]"
          src={
            'https://s3-alpha-sig.figma.com/img/0505/ebd6/965c841fb79dcd825119b469f829a2d1?Expires=1691366400&Signature=WC8pWadwDcBKr4xhRsm1vvjzQsr3FBtfSo34iRpc20FfwMAWgLXZXgAc2Ubc~~kLnMkajmTSmBJf2Cp8osc8MxwYWQw5jBvJdkwmSaQLvXh5MLtV~3Zl3JA2pa~LXt0XVYUySL7JDKOFZsn7NpLh1o5CvZ546T-fXJG1dTVgP4Bz0Xy1aSKDLD0wGgMiV1bpQVzKpvcv3SGA3KB0NlV~12H3lbZa-yHTb4TbFmdNipUSyTu~-ZvjlExCfibVmLjZjEDiaQ4g589luDZzV~4iqN6pwV8R8zx-~n5zvHDpyrkQmtQSoAWyFOTyfzRZpzxuBiYxmqIGHJnC89xK8TxkAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          }
          alt="article-img"
        />
      </div>

      <h4 className="text-title-md font-bold truncate font-satoshi">
        14 Strategi Efektif Mengembangkan Bisnis Menggunakan Digital Marketing
      </h4>
    </div>
  )
}

Article.getLayout = (
  page: ReactElement<any, string | JSXElementConstructor<any>>
) => <MainLayout isNormal={true}>{page}</MainLayout>

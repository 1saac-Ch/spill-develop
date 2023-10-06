import { JSXElementConstructor, ReactElement } from 'react'
import MainLayout from '@/component/layouts/MainLayout'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import RelatedArticle from '@/component/article/RelatedArticle'
import { useRouter } from 'next/router'

import RobotNotFound from '@/assets/images/robot.png'

import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import Image from 'next/image'
import Button from '@/component/elements/Button/component'
import useFetcher from '@/hooks/useFetcher'

// export const getStaticPaths: GetStaticPaths = async () => {
//   const url = process.env.NEXT_PUBLIC_API_URL

//   const allArticle: { data: Article[] } = await fetch(`${url}/article`).then(
//     (res) => res.json()
//   )
//   return {
//     fallback: 'blocking',
//     paths: allArticle.data.map((item) => {
//       return {
//         params: {
//           id: item.article_id,
//         },
//       }
//     }),
//   }
// }

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const url = process.env.NEXT_PUBLIC_API_URL

//   const [_article, relatedArticles] = await Promise.all([
//     fetch(`${url}/article/${context.params?.id}`).then((res) => res.json()),
//     fetch(`${url}/article/related`).then((res) => res.json()),
//   ])

//   const article: Article | null =
//     _article.message === 'Article tidak ditemukan' ? null : _article.data

//   return {
//     props: {
//       article,
//       relatedArticles: relatedArticles.data as Article[],
//     },
//     revalidate: 604800,
//   }
// }

// type Props = InferGetStaticPropsType<typeof getStaticProps>

const NotFoundArticle = () => {
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
            Halaman yang kamu tuju tidak ditemukan
          </h2>

          <div className="flex gap-4">
            <Button
              onClick={() => router.back()}
              className="bg-pink rounded-xl text-label-lg text-white font-satoshi py-3 px-4 max-w-fit"
            >
              Kembali
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ArticleDetail() {
  const router = useRouter()

  const { data } = useFetcher<{ data: Article }>(`/article/${router.query.id}`)

  const article = data?.data

  if (!article) {
    return (
      <div className="bg-background main-container">
        <NotFoundArticle />
      </div>
    )
  }

  return (
    <main className="bg-background">
      <div className="flex gap-4 items-center main-container">
        <button onClick={() => router.back()}>
          <KeyboardBackspaceIcon />
        </button>
        <h1 className="text-headline-sm font-[900] font-satoshi">Artikel</h1>
      </div>
      <div className="main-container flex flex-col gap-5 lg:grid lg:grid-cols-[800px_1fr] lg:gap-8">
        <article className="rounded-[20px] p-5 flex flex-col gap-5 bg-white shadow-sm">
          <div className="relative w-full h-[400px]">
            <img
              className="absolute w-full h-full object-cover inset-0 rounded-[20px]"
              src={article.image}
              alt="article-img"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-title-lg font-bold font-satoshi">
              {article.title}
            </h1>
            <p className="text-body-lg font-satoshi">{article.description}</p>
          </div>
        </article>

        <div className="flex flex-col gap-5 mt-10 md:mt-0">
          <h3 className="text-left text-headline-sm font-bold">Terkait</h3>

          {/* {relatedArticles.map((article) => (
            <RelatedArticle key={article.id} article={article} />
          ))} */}
        </div>
      </div>
    </main>
  )
}

ArticleDetail.getLayout = (
  page: ReactElement<any, string | JSXElementConstructor<any>>
) => <MainLayout isNormal={true}>{page}</MainLayout>

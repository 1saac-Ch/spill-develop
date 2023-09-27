import { JSXElementConstructor, ReactElement } from 'react'
import MainLayout from '@/component/layouts/MainLayout'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import RelatedArticle from '@/component/article/RelatedArticle'
import { useRouter } from 'next/router'
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  const url = process.env.NEXT_PUBLIC_API_URL

  const allArticle: { data: Article[] } = await fetch(`${url}/article`).then(
    (res) => res.json()
  )
  return {
    fallback: 'blocking',
    paths: allArticle.data.map((item) => {
      console.log('i', item.article_id)
      return {
        params: {
          id: item.article_id,
        },
      }
    }),
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const url = process.env.NEXT_PUBLIC_API_URL

  const [article, relatedArticles] = await Promise.all([
    fetch(`${url}/article/${context.params?.id}`).then((res) => res.json()),
    fetch(`${url}/article/related`).then((res) => res.json()),
  ])

  return {
    props: {
      article: article.data as Article,
      relatedArticles: relatedArticles.data as Article[],
    },
    revalidate: 604800,
  }
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

export default function ArticleDetail({ article, relatedArticles }: Props) {
  const router = useRouter()

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
            <p className="text-body-lg font-satoshi">
              {article.description}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              libero tenetur fugiat suscipit ea eaque nemo nobis laudantium,
              voluptas debitis corporis voluptatem optio amet reprehenderit
              velit incidunt laboriosam reiciendis modi hic eum doloribus nisi
              culpa ex! Inventore, expedita libero? Vel voluptatum minima
              recusandae cupiditate. Quisquam laboriosam eum expedita excepturi
              illo architecto ex quibusdam, atque, voluptates aperiam nemo odit.
              Nisi impedit minus labore maiores laboriosam ut. Tenetur <br />
              necessitatibus ipsum quia atque blanditiis magnam rerum porro
              maiores id ratione sequi, odit, ea quibusdam eveniet asperiores,
              molestias laborum? Ex aspernatur autem, at error nobis optio
              consectetur porro labore recusandae quisquam unde quasi cum beatae
              provident excepturi, in sit ipsam officiis consequatur aliquid
              earum quas? Delectus blanditiis facilis ipsum, temporibus fuga, ab
              sed quasi a esse neque minima quae! Eum sapiente minima odit
              laborum dolorem alias amet itaque aperiam fugit cum totam quos
              maiores quia, accusamus ab quod voluptatum? Tenetur similique
              optio error expedita sapiente in nobis dolor aut. Nobis eaque, sit
              voluptatem laborum corrupti officiis! Nesciunt excepturi suscipit
              sed maxime at pariatur deserunt iusto quibusdam vero quaerat
              placeat eos, sunt ea mollitia animi exercitationem fuga aperiam.
              Ratione unde perferendis consectetur officia officiis. Quis
              quaerat totam ab maxime iste nostrum, eveniet deserunt modi
              quisquam!
            </p>
          </div>
        </article>

        <div className="flex flex-col gap-5 mt-10 md:mt-0">
          <h3 className="text-left text-headline-sm font-bold">Terkait</h3>

          {relatedArticles.map((article) => (
            <RelatedArticle key={article.id} article={article} />
          ))}
        </div>
      </div>
    </main>
  )
}

ArticleDetail.getLayout = (
  page: ReactElement<any, string | JSXElementConstructor<any>>
) => <MainLayout isNormal={true}>{page}</MainLayout>

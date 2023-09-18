import { JSXElementConstructor, ReactElement } from 'react'
import MainLayout from '@/component/layouts/MainLayout'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import RelatedArticle from '@/component/article/RelatedArticle'
import { useRouter } from 'next/router'
import useFetcher from '@/hooks/useFetcher'
import Error from 'next/error'

export default function ArticleDetail() {
  const router = useRouter()

  const { id } = router.query

  const { data, isLoading, isError } = useFetcher<{ data: Article }>(
    `/article/${id}`
  )

  if (isLoading) return <p>Loading....</p>

  const article = data?.data

  if (!article || isError) return <Error statusCode={404} />

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

          <RelatedArticle article={article} />
        </div>
      </div>
    </main>
  )
}

ArticleDetail.getLayout = (
  page: ReactElement<any, string | JSXElementConstructor<any>>
) => <MainLayout isNormal={true}>{page}</MainLayout>

import MainLayout from '@/component/layouts/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { JSXElementConstructor, ReactElement } from 'react'
import Pagination from '@/component/ui/Pagination'
import RelatedArticle from '@/component/article/RelatedArticle'

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="rounded-[20px] p-5 flex flex-col gap-5 bg-white shadow-sm lg:flex-row lg:gap-10">
      <div className="relative w-full h-[200px] lg:flex-1">
        <img
          className="absolute h-full w-full object-cover inset-0 rounded-[20px]"
          src={article.image}
          alt="article-img"
        />
      </div>

      <div className="lg:flex-1 flex flex-col gap-2 lg:justify-between">
        <h1 className="text-title-lg font-bold font-satoshi lg:line-clamp-2">
          {article.title}
        </h1>
        <p className="text-body-lg font-satoshi line-clamp-3">
          {article.description}
        </p>

        <Link
          href={`/article/${article.article_id}`}
          className="text-[#F22178] font-semibold w-max inline-block font-satoshi"
        >
          Lihat selengkapnya...
        </Link>
      </div>
    </article>
  )
}

export default function Article({
  articles,
  relatedArticles,
}: {
  articles: Article[]
  relatedArticles: Article[]
}) {
  const router = useRouter()

  return (
    <main className="bg-background">
      <div className="py-10 px-5 flex flex-col gap-5 lg:grid lg:grid-cols-[800px_1fr] lg:gap-8 max-w-[1296px] mx-auto">
        <div className="space-y-5">
          <h1 className="text-headline-sm font-[900] font-satoshi lg:mb-5">
            Artikel
          </h1>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
          <Pagination className="lg:justify-end" />
        </div>
        <div className="flex flex-col gap-5 lg:mt-0">
          <h3 className="text-left text-headline-sm font-satoshi font-[900]">
            Artikel Terkait
          </h3>
          {relatedArticles.map((article) => (
            <RelatedArticle key={article.id} article={article} />
          ))}
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

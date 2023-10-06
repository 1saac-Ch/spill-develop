import Link from 'next/link'

export default function RelatedArticle({ article }: { article: Article }) {
  return (
    <Link
      href={`/article/${article.article_id}`}
      className="p-5 flex items-center gap-5 rounded-[20px] shadow bg-white"
    >
      <div className="relative w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] flex-none lg:rounded-[20px]">
        <img
          className="absolute h-full object-cover inset-0 rounded-[8px]"
          src={article.image}
          alt="article-img"
        />
      </div>

      <h4 className="text-title-md font-bold line-clamp-2 font-satoshi">
        {article.title}
      </h4>
    </Link>
  )
}

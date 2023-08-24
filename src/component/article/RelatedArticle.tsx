import Image from 'next/image'
import Link from 'next/link'

export default function RelatedArticle() {
  return (
    <Link
      href={`/article/1`}
      className="p-5 flex items-center gap-5 rounded-[20px] shadow bg-white"
    >
      <div className="relative w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] flex-none lg:rounded-[20px]">
        <Image
          fill
          className="object-cover inset-0 rounded-[8px]"
          src={'/content.png'}
          alt="article-img"
        />
      </div>

      <h4 className="text-title-md font-bold line-clamp-2 font-satoshi">
        14 Strategi Efektif Mengembangkan Bisnis Menggunakan Digital Marketing
      </h4>
    </Link>
  )
}

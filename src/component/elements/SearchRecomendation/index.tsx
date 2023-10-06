import { cn } from '@/utils/classname'
import Link from 'next/link'

type Props = {
  className?: string
  value?: string
  directToDetail?: boolean
  id?: number | string
}

const SearchRecomendationItem = ({
  className,
  value = 'Scarlet beauty pelembap',
  directToDetail = false,
  id,
}: Props) => {
  let href = `/catalogue-product?q=${value}`
  if (directToDetail) {
    href = `/detail-product/${id!}`
  }
  return (
    <Link
      href={href}
      className={cn(
        'p-4 font-satoshi cursor-pointer hover:bg-accent text-label-lg flex items-center',
        className
      )}
    >
      <img src="/icons/search.svg" alt="search" className="w-4 h-4 mr-2" />
      {value}
    </Link>
  )
}

export default SearchRecomendationItem

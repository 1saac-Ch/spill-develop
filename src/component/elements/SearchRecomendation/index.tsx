import { cn } from '@/utils/classname'
import Link from 'next/link'

const SearchRecomendationItem = ({
  className,
  value = 'Scarlet beauty pelembap',
}: {
  className?: string
  value?: string
}) => {
  return (
    <Link
      href={`/catalogue-product?q=${value}`}
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

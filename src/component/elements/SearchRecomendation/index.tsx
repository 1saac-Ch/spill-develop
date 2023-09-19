import { cn } from '@/utils/classname'
import SearchIcon from '@mui/icons-material/Search'
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
      scroll={false}
      href={`/catalogue-product?q=${value}`}
      className={cn(
        'p-4 font-satoshi cursor-pointer hover:bg-accent text-label-lg block',
        className
      )}
    >
      <SearchIcon className="w-4 h-4 mr-2" />
      {value}
    </Link>
  )
}

export default SearchRecomendationItem

import useLockBodyScroll from '@/hooks/useLockBody'
import Image from 'next/image'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useState } from 'react'
import Link from 'next/link'
import SearchRecomendationItem from '@/component/elements/SearchRecomendation'

export default function SearchMobile({ onClose }: { onClose: () => void }) {
  const [search, setSearch] = useState('')

  useLockBodyScroll()
  return (
    <div className="fixed z-[99999] w-screen h-screen inset-0 bg-white md:hidden p-5">
      <nav className="flex items-center justify-between">
        <button onClick={onClose}>
          <ArrowBackIcon className="w-6 h-6 text-muted-foreground" />
        </button>
        <div className="flex-1 gap-2 flex items-center py-2 px-4 justify-between">
          <input
            className="placeholder:text-label-lg flex-1 outline-none"
            placeholder="Find Your Product Here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Link href={`/catalogue-product?q=${search}`} className="w-5 h-5">
            <Image
              src={'/icons/search.svg'}
              width={0}
              height={0}
              alt="search"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>
      </nav>

      <div className="flex-col">
        {!search ? (
          <TrendingProduct />
        ) : (
          <SearchRecomendationItem
            value={search}
            className="hover:bg-white p-4 flex items-center self-stretch gap-2"
          />
        )}
      </div>
    </div>
  )
}

function TrendingProduct() {
  return (
    <>
      <h1 className="flex p-4 items-center gap-2 self-stretch text-label-lg font-bold ">
        🔥 Produk Paling Banyak Dicari:
      </h1>

      <SearchRecomendationItem className="p-4 flex items-center self-stretch gap-2 hover:bg-white" />
      <SearchRecomendationItem className="p-4 flex items-center self-stretch gap-2 hover:bg-white" />
    </>
  )
}

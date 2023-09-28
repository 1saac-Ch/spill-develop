import SearchRecomendationItem from '@/component/elements/SearchRecomendation'
import { useRouter } from 'next/router'
import { FormEvent, useContext, useRef } from 'react'
import Backdrop from '../LayoutCatalogue/Backdrop'
import { createPortal } from 'react-dom'
import { searchContext } from '../LayoutCatalogue'

type Props = {}

export default function SearchInput({}: Props) {
  const { openSearch, setOpenSearch } = useContext(searchContext)

  const router = useRouter()

  const parentRef = useRef<HTMLDivElement>(null)
  const listContainerRef = useRef<HTMLDivElement>(null)

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault()
    const element = e.currentTarget.querySelector('#search') as HTMLInputElement
    const searchParam = new URLSearchParams({
      q: element.value,
    })

    router.push(`/catalogue-product?${searchParam.toString()}`)
  }

  return (
    <>
      <div className="hidden md:block relative flex-1" ref={parentRef}>
        <form
          onSubmit={handleSearchSubmit}
          className=" flex items-center justify-between py-[18px] px-[16px] bg-[#E8FBF5] w-full rounded-[12px]"
        >
          <input
            placeholder="Cari produk disini"
            id="search"
            onFocus={() => setOpenSearch?.(true)}
            className="w-full border-none  outline-none bg-[#E8FBF5] text-[14px] leading-low"
          />
          <button>
            <img src="/icons/search.svg" className="w-5 h-5" alt="search" />
          </button>
        </form>
        {openSearch ? (
          <div
            ref={listContainerRef}
            className="w-full absolute z-[10] top-[64px] rounded-xl shadow-md bg-white overflow-hidden "
          >
            <h3 className="p-4 font-bold text-label-lg">
              <span className="mr-2">🔥</span>Produk Paling Banyak Dicari:
            </h3>
            <SearchRecomendationItem value={'Scarlet beauty'} />
            <SearchRecomendationItem value={'Scarlet beauty'} />
          </div>
        ) : null}

        {createPortal(
          openSearch ? (
            <Backdrop onClick={() => setOpenSearch?.(false)} />
          ) : null,
          document.querySelector('body') as any
        )}
      </div>
    </>
  )
}

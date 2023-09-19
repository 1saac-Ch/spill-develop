import SearchRecomendationItem from '@/component/elements/SearchRecomendation'
import { useRouter } from 'next/router'
import { FormEvent, useCallback, useRef, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import useClickOutside from '@/hooks/useClickOutside'
import Backdrop from '../LayoutCatalogue/Backdrop'
import { createPortal } from 'react-dom'

type Props = {}

export default function SearchInput({}: Props) {
  const [isOpenRecomend, setIsOpenRecomend] = useState(false)
  const router = useRouter()

  const parentRef = useRef<HTMLDivElement>(null)

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault()
    const element = e.currentTarget.querySelector('#search') as HTMLInputElement
    const searchParam = new URLSearchParams({
      q: element.value,
    })

    router.push(`/catalogue-product?${searchParam.toString()}`)
  }

  const onClickOutside = useCallback(() => {
    setIsOpenRecomend(false)
  }, [])

  useClickOutside(parentRef, onClickOutside)

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
            onFocus={() => setIsOpenRecomend(true)}
            className="w-full border-none  outline-none bg-[#E8FBF5] text-[14px] leading-low"
          />
          <button>
            <SearchIcon className={'cursor-pointer'} />
          </button>
        </form>
        {isOpenRecomend ? (
          <div className="w-full absolute z-[10] top-[64px] rounded-xl shadow-md bg-white overflow-hidden ">
            <h3 className="p-4 font-bold text-label-lg">
              <span className="mr-2">🔥</span>Produk Paling Banyak Dicari:
            </h3>
            <SearchRecomendationItem value={'Scarlet beauty'} />
            <SearchRecomendationItem value={'Scarlet beauty'} />
          </div>
        ) : null}

        {createPortal(
          isOpenRecomend ? <Backdrop /> : null,
          document.querySelector('body') as any
        )}
      </div>
    </>
  )
}

import { ReactElement, JSXElementConstructor, useState } from 'react'
// import dynamic from 'next/dynamic'

import CatalogueLayout from '@/component/layouts/LayoutCatalogue'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/component/elements/Select'

import FilterProduct from '@/component/catalogue/FilterProduct'
import ProductCard from '@/component/catalogue/ProductCard'
import NotFoundProduct from './not-found'
// import LayoutRekomendationFooter from '@/component/layouts/LayoutRekomendationFooter'
import { useRouter } from 'next/router'
// import { useMediaQuery } from '@mui/material'
import useFetcher from '@/hooks/useFetcher'

// const BottomSheet = dynamic(() => import('@/component/ui/BottomSheet'), {
//   loading: () => <p>Loading...</p>,
// })

const SortOptions = [
  'Paling Sesuai',
  'Ulasan',
  'Terbaru',
  'Harga Tertinggi',
  'Harga Terendah',
]

const CatalogueProduct = () => {
  const [activeOption, setActiveOption] = useState(SortOptions[0])
  // const isLarge = useMediaQuery('(min-width: 1024px)')

  const router = useRouter()

  const { data, isLoading } = useFetcher<{ data: Product[] }>(
    `/home/user/search?product=${router.query.q}`,
    false,
    {
      refetchOnWindowFocus: false,
    }
  )

  const keyword = router.query.q
  const products = data?.data || []

  const notFound = !keyword || !data?.data.length

  if (isLoading) return <p className="text-center py-10">Loading...</p>

  if (notFound)
    return (
      <div className="main-container">
        <NotFoundProduct />
      </div>
    )

  return (
    <>
      <main className="bg-background main-container">
        <div className="min-h-screen lg:grid grid-cols-[253px_1fr] gap-10 py-10 md:py-16 font-satoshi">
          <FilterProduct />

          <div className="flex flex-col gap-10 md:gap-6">
            <div className="flex gap-6 md:gap-0 flex-col md:flex-row md:items-center justify-between ">
              <h4 className="text-title-sm md:text-title-md">
                Menampilkan <strong>{products.length}</strong> untuk kata kunci{' '}
                <strong>{keyword}</strong>
              </h4>

              <div className="flex justify-end items-center gap-4 md:gap-6">
                {/* <label className=" text-title-md font-[900]">Urutkan</label>

                <Select
                  disabled={true}
                  onValueChange={(val) => setActiveOption(val)}
                  value={activeOption}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Paling sesuai" />
                  </SelectTrigger>
                  <SelectContent>
                    {SortOptions.map((opt, i) => (
                      <SelectItem
                        key={i}
                        value={opt}
                        className={opt === activeOption ? 'font-bold' : ''}
                        defaultChecked={i === 0}
                      >
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select> */}
                {/* {!isLarge ? (
                  <BottomSheet>
                    <FilterProduct inMobileDevice />
                  </BottomSheet>
                ) : null} */}
              </div>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-6 md:gap-4 mb-4">
              {products.map((prod, i) => {
                const image = JSON.parse(prod.images) as string[]
                return (
                  <ProductCard
                    id={prod.product_id}
                    image={image[0]}
                    title={prod.product_title}
                    review={prod.review_count}
                    rate={prod.rating || 0}
                    production={prod.brand}
                    minPrize={prod.price_min}
                    maxPrize={prod.price_max}
                    key={i}
                  />
                )
              })}
            </div>

            {/* PAGINATION */}
            {/* <Pagination /> */}
          </div>
        </div>
      </main>
      {/* <LayoutRekomendationFooter /> */}
    </>
  )
}

CatalogueProduct.getLayout = (
  page: ReactElement<any, string | JSXElementConstructor<any>>
) => <CatalogueLayout isNormal={true}>{page}</CatalogueLayout>

export default CatalogueProduct

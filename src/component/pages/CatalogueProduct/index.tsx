import { ReactElement, JSXElementConstructor, useState } from 'react'
import dynamic from 'next/dynamic'

import CatalogueLayout from '@/component/layouts/LayoutCatalogue'

import ComputerImage from '@/assets/images/computer.jpg'

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
import LayoutRekomendationFooter from '@/component/layouts/LayoutRekomendationFooter'
import Pagination from '@/component/ui/Pagination'
import { useRouter } from 'next/router'
import { useMediaQuery } from '@mui/material'
// import useFetcher from '@/hooks/useFetcher'

const BottomSheet = dynamic(() => import('@/component/ui/BottomSheet'), {
  loading: () => <p>Loading...</p>,
})

const SortOptions = [
  'Paling Sesuai',
  'Ulasan',
  'Terbaru',
  'Harga Tertinggi',
  'Harga Terendah',
]

const CatalogueProduct = () => {
  const [activeOption, setActiveOption] = useState(SortOptions[0])
  const isLarge = useMediaQuery('(min-width: 1024px)')

  const router = useRouter()

  // const { data, isLoading } = useFetcher<Product[]>(
  //   `/home/user/${router.query.q}`
  // )

  const notFound = !router.query.q

  return (
    <main className="bg-background main-container">
      <div className="min-h-screen lg:grid grid-cols-[253px_1fr] gap-10 py-10 md:py-16 font-satoshi">
        <FilterProduct />

        {!notFound ? (
          <div className="flex flex-col gap-10 md:gap-6">
            <div className="flex gap-6 md:gap-0 flex-col md:flex-row md:items-center justify-between ">
              <h4 className="text-title-sm md:text-title-md">
                Menampilkan <strong>count</strong> untuk kata kunci{' '}
                <strong>keyword</strong>
              </h4>

              <div className="flex justify-end items-center gap-4 md:gap-6">
                <label className=" text-title-md font-[900]">Urutkan</label>

                <Select
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
                </Select>
                {!isLarge ? (
                  <BottomSheet>
                    <FilterProduct inMobileDevice />
                  </BottomSheet>
                ) : null}
              </div>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-6 md:gap-4 mb-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <ProductCard
                    image={ComputerImage}
                    title="Sony VM-1000x Wireless Headphone Bluetooth"
                    review="32"
                    rate={4.8}
                    production="Sony"
                    minPrize="Rp.1.000.000"
                    maxPrize="Rp.1.430.000"
                    key={i}
                  />
                ))}
            </div>

            {/* PAGINATION */}
            <Pagination />
          </div>
        ) : (
          <NotFoundProduct />
        )}
      </div>

      <LayoutRekomendationFooter />
    </main>
  )
}

CatalogueProduct.getLayout = (
  page: ReactElement<any, string | JSXElementConstructor<any>>
) => <CatalogueLayout isNormal={true}>{page}</CatalogueLayout>

export default CatalogueProduct

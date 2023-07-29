import React from 'react'
import NextLink from 'next/link'
import { ReactElement, JSXElementConstructor } from 'react'

import CatalogueLayout from '@/component/layouts/LayoutCatalogue'

import ComputerImage from '@/assets/images/computer.jpg'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/component/elements/Select'
import Link from 'next/link'
import FilterProduct from '@/component/catalogue/FilterProduct'
import ProductCard from '@/component/catalogue/ProductCard'
import NotFoundProduct from './not-found'
import LayoutRekomendationFooter from '@/component/layouts/LayoutRekomendationFooter'
import Pagination from '@/component/ui/Pagination'

const SortOptions = [
  'Paling Sesuai',
  'Ulasan',
  'Terbaru',
  'Harga Tertinggi',
  'Harga Terendah',
]

const CatalogueProduct = () => {
  const [activeOption, setActiveOption] = React.useState(SortOptions[0])

  const notFound = false

  return (
    <main className="bg-background">
      <div className="min-h-screen grid grid-cols-[253px_1fr] gap-10 px-5 md:pl-12 md:pr-[72px] py-16 font-satoshi">
        <FilterProduct />

        {!notFound ? (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between ">
              <h4 className="text-title-md font-bold">
                Menampilkan <span>count</span> untuk kata kunci{' '}
                <span>keyword</span>
              </h4>

              <div className="flex items-center gap-6">
                <label className="text-title-md font-[900]">Urutkan</label>
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
              </div>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <React.Fragment key={i}>
                    <NextLink href="/detail-product" passHref>
                      <ProductCard
                        image={ComputerImage}
                        title="Sony VM-1000x Wireless Headphone Bluetooth"
                        review="32"
                        rate={4.8}
                        production="Sony"
                        minPrize="Rp.1.000.000"
                        maxPrize="Rp.1.430.000"
                      />
                    </NextLink>
                  </React.Fragment>
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

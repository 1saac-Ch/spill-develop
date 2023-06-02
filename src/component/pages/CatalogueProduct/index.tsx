import React from 'react'
import { ReactElement, JSXElementConstructor, useId } from 'react'
import styles from './index.module.scss'

import CatalogueLayout from '@/component/layouts/LayoutCatalogue'

import LeftArrow from '@/assets/icons/LeftArrow.svg'
import RightArrow from '@/assets/icons/RightArrow.svg'
import ComputerImage from '@/assets/images/computer.jpg'

import Image from 'next/image'
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
                  <ProductCard
                    key={i}
                    image={ComputerImage}
                    title="Sony VM-1000x Wireless Headphone Bluetooth"
                    review="32"
                    rate={4.8}
                    production="Sony"
                    minPrize="Rp.1.000.000"
                    maxPrize="Rp.1.430.000"
                  />
                ))}
            </div>

            {/* PAGINATION */}
            <div className="flex items-center gap-4 ml-auto mb-14">
              <Link href={'/'}>
                <Image
                  src={LeftArrow}
                  className="w-4 h-4 object-contain"
                  alt="left-arrow"
                />
              </Link>

              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Link
                    key={i}
                    href={'/'}
                    className={`${
                      i === 0
                        ? 'bg-blue-50 text-white'
                        : 'bg-transparent text-dark border border-abu'
                    } w-11 h-11  flex items-center justify-center rounded-xl text-label-lg font-bold`}
                  >
                    {i + 1}
                  </Link>
                ))}
              <Link href={'/'}>
                <Image
                  src={RightArrow}
                  className="w-4 h-4 object-contain"
                  alt="right-arrow"
                />
              </Link>
            </div>
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

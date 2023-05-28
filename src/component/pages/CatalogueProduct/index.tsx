import React from 'react'
import { ReactElement, JSXElementConstructor, useId } from 'react'
import styles from './index.module.scss'

import CatalogueLayout from '@/component/layouts/LayoutCatalogue'
import { Checkbox } from '@/component/ui/Checkbox'

import StarFilled from '@/assets/icons/StarFilled.svg'
import StarMuted from '@/assets/icons/StarMuted.svg'
import Image from 'next/image'
import Button from '@/component/elements/Button/component'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/component/elements/Dropdown'

const RatingOption = ({ rate }: { rate: number }) => {
  const id = useId()
  const RateStars = Array(5)
    .fill(0)
    .map((item, i) => (
      <span key={i}>
        <Image
          src={i < rate ? StarFilled : StarMuted}
          width={16}
          height={16}
          className="object-contain"
          alt="rate"
        />
      </span>
    ))

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} />
      <label htmlFor={id} className="flex gap-2">
        {RateStars}
      </label>
    </div>
  )
}

const FilterProduct = () => {
  return (
    <aside className="space-y-3">
      <h5 className="font-semibold ml-6">Filter</h5>

      <div className="rounded-lg shadow-md p-6 bg-white flex flex-col gap-3">
        <h6 className="font-semibold text-sm">Harga</h6>

        <div className="flex border border-[#b1b1b1] rounded text-sm">
          <span className="text-center bg-accent py-3 px-4 font-semibold">
            Rp
          </span>
          <input className="p-2 w-full" placeholder="Harga Minimum" />
        </div>

        <div className="flex border border-[#b1b1b1] rounded text-sm">
          <span className="text-center bg-accent py-3 px-4 font-semibold">
            Rp
          </span>
          <input className="p-2 w-full" placeholder="Harga Maksimum" />
        </div>

        <h6 className="font-semibold text-sm">Rating</h6>
        <RatingOption rate={5} />
        <RatingOption rate={4} />
        <RatingOption rate={3} />
        <RatingOption rate={2} />
        <RatingOption rate={1} />

        <Button
          variant="outline"
          disabled
          className="w-full mt-10  text-muted-foreground border-[#b1b1b1]"
        >
          Reset Filter
        </Button>
      </div>
    </aside>
  )
}

const SortOptions = [
  'Paling Sesuai',
  'Ulasan',
  'Terbaru',
  'Harga Tertinggi',
  'Harga Terendah',
]

const CatalogueProduct = () => {
  const [activeOption, setActiveOption] = React.useState(SortOptions[0])

  return (
    <main className="min-h-screen grid grid-cols-[253px_1fr] gap-10 px-5 md:px-10 py-16 bg-background font-satoshi">
      <FilterProduct />

      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between ">
          <h4 className="text-title-md font-bold">
            Menampilkan <span>count</span> untuk kata kunci <span>keyword</span>
          </h4>

          <div className="flex items-center gap-6">
            <label className="text-title-md font-[900]">Urutkan</label>
            <Select onValueChange={(val) => setActiveOption(val)}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Paling sesuai" />
              </SelectTrigger>
              <SelectContent>
                {SortOptions.map((opt, i) => (
                  <SelectItem
                    key={i}
                    value={opt}
                    className={opt === activeOption ? 'font-bold' : ''}
                  >
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </main>
  )
}

CatalogueProduct.getLayout = (
  page: ReactElement<any, string | JSXElementConstructor<any>>
) => <CatalogueLayout isNormal={true}>{page}</CatalogueLayout>

export default CatalogueProduct

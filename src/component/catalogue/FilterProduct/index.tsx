import StarFilled from '@/assets/icons/StarFilled.svg'
import StarMuted from '@/assets/icons/StarMuted.svg'
import Button from '@/component/elements/Button/component'
import { Checkbox } from '@/component/ui/Checkbox'
import Image from 'next/image'
import React from 'react'

const RatingOption = ({ rate }: { rate: number }) => {
  const id = React.useId()
  const RateStars = Array(5)
    .fill(0)
    .map((_, i) => (
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
    <aside className="space-y-3 mt-3">
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

export default FilterProduct

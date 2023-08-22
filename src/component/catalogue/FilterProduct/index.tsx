import Button from '@/component/elements/Button/component'
import { Checkbox } from '@/component/ui/Checkbox'
import React from 'react'
import StarIcon from '@/component/elements/StarIcon'
import { cn } from '@/utils/classname'

const RatingOption = ({
  rate,
  activeRate,
  setActiveRate,
}: {
  rate: number
  activeRate: number
  setActiveRate: React.Dispatch<React.SetStateAction<number>>
}) => {
  const id = React.useId()
  const RateStars = Array(5)
    .fill(0)
    .map((_, i) => (
      <span key={i}>
        <StarIcon size={16} color={i < rate ? '#F26E21' : '#A6A6A6'} />
      </span>
    ))

  const isChecked = rate === activeRate

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
        checked={isChecked}
        onCheckedChange={() => {
          if (isChecked) {
            setActiveRate(0)
            return
          }
          setActiveRate(rate)
        }}
      />
      <label htmlFor={id} className="flex gap-2">
        {RateStars}
      </label>
    </div>
  )
}

const FilterProduct = ({ inMobileDevice = false }) => {
  const [activeRate, setActiveRate] = React.useState(0)

  return (
    <aside
      className={cn(
        'space-y-3',
        inMobileDevice ? 'block lg:hidden h-full' : 'hidden lg:block mt-3'
      )}
    >
      <h5 className="hidden md:block font-semibold ml-6">Filter</h5>

      <div className="rounded-lg shadow-md px-6 lg:p-6 bg-white flex flex-col gap-3 h-full lg:h-auto">
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
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <RatingOption
              key={i}
              rate={i + 1}
              activeRate={activeRate}
              setActiveRate={setActiveRate}
            />
          ))}
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

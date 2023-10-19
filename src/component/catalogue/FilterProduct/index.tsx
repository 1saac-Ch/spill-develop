import Button from '@/component/elements/Button/component'
import { Checkbox } from '@/component/ui/Checkbox'
import React, { FormEvent, useEffect } from 'react'
import StarIcon from '@/component/elements/StarIcon'
import { cn } from '@/utils/classname'
import { useRouter } from 'next/router'
import formatCurrency from '@/utils/formatCurrency'

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
  const router = useRouter()
  const [activeRate, setActiveRate] = React.useState(0)
  const [minPrice, setMinPrice] = React.useState<number | null>(null)
  const [maxPrice, setMaxPrice] = React.useState<number | null>(null)

  const query = router.query

  useEffect(() => {
    if (query['price_min']) {
      const value = query['price_min']
      if (!isNaN(Number(value))) {
        setMinPrice(Number(value))
      }
    }
    if (query['price_max']) {
      const value = query['price_max']
      if (!isNaN(Number(value))) {
        setMaxPrice(Number(value))
      }
    }
    if (query.rating) {
      const value = query.rating
      if (!isNaN(Number(value))) {
        setActiveRate(Number(value))
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query])

  function handleFilterSubmit(e: FormEvent) {
    e.preventDefault()

    const queryObj: Record<string, any> = {
      product: router.query.product,
    }
    if (minPrice) queryObj['price_min'] = minPrice
    if (maxPrice) queryObj['price_max'] = maxPrice
    if (activeRate) queryObj.rating = activeRate

    router.push({
      query: queryObj,
    })
  }

  return (
    <form
      onSubmit={handleFilterSubmit}
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
          <input
            name="min-price"
            value={!!minPrice ? formatCurrency(minPrice) : ''}
            onChange={(e) => {
              const value = Number(e.target.value.replaceAll('.', ''))
              if (!isNaN(value)) {
                setMinPrice(value)
              }
            }}
            className="p-2 w-full"
            // defaultValue={query['price_min']}
            placeholder="Harga Minimum"
          />
        </div>

        <div className="flex border border-[#b1b1b1] rounded text-sm">
          <span className="text-center bg-accent py-3 px-4 font-semibold">
            Rp
          </span>
          <input
            name="max-price"
            value={!!maxPrice ? formatCurrency(maxPrice) : ''}
            onChange={(e) => {
              const value = Number(e.target.value.replaceAll('.', ''))
              if (!isNaN(value)) {
                setMaxPrice(value)
              }
            }}
            className="p-2 w-full"
            // defaultValue={'1000000000'}
            placeholder="Harga Maksimum"
          />
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
          type="button"
          onClick={() => {
            setActiveRate(0)
            setMinPrice(null)
            setMaxPrice(null)
          }}
          variant="outline"
          className="w-full mt-10  disabled:text-muted-foreground disabled:border-[#b1b1b1] text-neutral-600 border-neutral-800 hover:border-[1px]"
        >
          Reset Filter
        </Button>
        <Button
          type="submit"
          variant="outline"
          className="w-full bg-blue-500 text-white"
        >
          Apply
        </Button>
      </div>
    </form>
  )
}

export default FilterProduct

import Image, { StaticImageData } from 'next/image'
import StarFilled from '@/assets/icons/StarFilled.svg'

type Props = {
  image: string | StaticImageData
  title: string
  production: string
  rate: number
  review: string
  minPrize: string
  maxPrize: string
}

const ProductCard = ({
  image,
  title,
  production,
  rate,
  review,
  maxPrize,
  minPrize,
}: Props) => {
  return (
    <div className="max-w-[240px] bg-white rounded-xl shadow-medium cursor-pointer">
      <Image
        src={image}
        alt="product-computer"
        className="w-full aspect-square object-cover"
      />

      <div className="p-4 flex flex-col gap-2 w-full">
        <h3 className="text-label-md font-bold max-w-44">{title}</h3>

        <p className="text-label-md font-satoshi">{production}</p>

        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-center">
            <Image
              src={StarFilled}
              className="w-3 h-3 object-contain"
              alt="star"
            />
            <p className="text-body-sm font-satoshi">{rate}</p>
          </div>

          <span>|</span>

          <p className="text-body-sm font-satoshi">{review}</p>
        </div>

        <h4 className="text-label-md text-pink font-bold">
          {minPrize} - {maxPrize}
        </h4>
      </div>
    </div>
  )
}

export default ProductCard

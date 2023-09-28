import Image, { StaticImageData } from 'next/image'
import StarFilled from '@/assets/icons/StarFilled.svg'
import Link from 'next/link'

type Props = {
  image: string | StaticImageData
  title: string
  production: string
  rate: number
  review: number
  minPrize: number
  maxPrize: number
  id: string
}

function formatToIDRCurrency(number: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
    .format(number)
    .replace(/,00$/, '')
}

const ProductCard = ({
  image,
  title,
  production,
  rate,
  review,
  maxPrize,
  minPrize,
  id,
}: Props) => {
  return (
    <article className=" bg-white rounded-xl shadow-medium max-w-[240px] mx-auto mb-10 relative">
      <img
        src={image as any}
        alt="product-computer"
        className="w-full aspect-square object-cover rounded-t-xl"
      />

      <div className="p-4 flex flex-col gap-2 w-full font-satoshi">
        <h3 className="text-label-md font-bold max-w-44">{title}</h3>

        <p className="text-label-md font-satoshi">{production}</p>

        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-center">
            <Image
              src={StarFilled}
              className="w-3 h-3 object-contain"
              alt="star"
            />
            <p className="text-body-sm font-satoshi">{rate.toFixed()}</p>
          </div>

          <span>|</span>

          <p className="text-body-sm font-satoshi">{review} review</p>
        </div>

        <h4 className="text-label-md text-pink font-bold">
          {formatToIDRCurrency(minPrize)} - {formatToIDRCurrency(maxPrize)}
        </h4>
      </div>

      <Link href={`/detail-product/${id}`} className="absolute inset-0" />
    </article>
  )
}

export default ProductCard

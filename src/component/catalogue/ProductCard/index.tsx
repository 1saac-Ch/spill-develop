import Image from 'next/image'
import ComputerImage from '@/assets/images/computer.jpg'
import StarFilled from '@/assets/icons/StarFilled.svg'

const ProductCard = () => {
  return (
    <div className="max-w-[240px] bg-white rounded-xl shadow-medium cursor-pointer">
      <Image
        src={ComputerImage}
        alt="product-computer"
        className="w-full aspect-square object-cover"
      />

      <div className="p-4 flex flex-col gap-2 w-full">
        <h3 className="text-label-md font-bold max-w-44">
          Sony VM-1000x Wireless Headphone Bluetooth
        </h3>

        <p className="text-label-md font-satoshi">Sony</p>

        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-center">
            <Image
              src={StarFilled}
              className="w-3 h-3 object-contain"
              alt="star"
            />
            <p className="text-body-sm font-satoshi">4.8</p>
          </div>

          <span>|</span>

          <p className="text-body-sm font-satoshi">32 Reviews</p>
        </div>

        <h4 className="text-label-md text-pink font-bold">
          Rp.1000.000 - Rp.1.430.000
        </h4>
      </div>
    </div>
  )
}

export default ProductCard

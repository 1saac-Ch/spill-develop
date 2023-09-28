import ProductCard from '@/component/catalogue/ProductCard'
import Button from '@/component/elements/Button/component'
import RobotNotFound from '@/assets/images/robot.png'

import Image from 'next/image'
import React, { useContext } from 'react'
import { searchContext } from '@/component/layouts/LayoutCatalogue'
import Link from 'next/link'

const NotFoundProduct = () => {
  const { setOpenSearch } = useContext(searchContext)

  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col md:flex-row items-center gap-10 py-6 px-10 bg-white rounded-[20px]">
        <Image
          src={RobotNotFound}
          alt="robot-not-found"
          className="w-[200px] h-[200px] object-cover flex-none"
        />

        <div className="flex flex-col gap-4 font-satoshi">
          <h2 className="text-title-lg font-bold">
            Yah... Produk Kamu Ngga Ketemu nih
          </h2>
          <h6 className="text-title-md">
            Coba kata kunci lain atau cek produk rekomendasi di bawah.
          </h6>

          <div className="flex gap-4">
            <Button
              onClick={() => setOpenSearch?.(true)}
              className="bg-pink rounded-xl text-label-lg text-white font-satoshi py-3 px-4 max-w-fit"
            >
              Coba lagi
            </Button>
            <Link
              href={'/suggest'}
              className="bg-transparent border border-pink rounded-xl text-label-lg text-pink font-satoshi py-3 px-4 max-w-fit font-semibold"
            >
              Sarankan Produk
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h1 className="text-title-lg font-bold">Rekomendasi</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <ProductCard
                key={i}
                id="1"
                image={'/computer.jpg'}
                title="Sony VM-1000x Wireless Headphone Bluetooth"
                review={32}
                rate={4.8}
                production="Sony"
                minPrize={1000000}
                maxPrize={1200000}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default NotFoundProduct

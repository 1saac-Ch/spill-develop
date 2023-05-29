import Button from '@/component/elements/Button/component'
import React from 'react'

const RecommendProduct = () => {
  return (
    <div className="bg-[#E8FBF5] py-10 px-[72px] flex items-center justify-between gap-6 font-satoshi">
      <div className="space-y-1">
        <h3 className="text-title-lg font-[900]">
          🔍 Produk yang kamu cari tidak ada di spill?
        </h3>
        <p className="text-body-lg font-satoshi">
          ayo bantu sarankan kami untuk menuliskan produk yang kamu cari
        </p>
      </div>

      <Button className="w-[145px]">Sarankan Produk</Button>
    </div>
  )
}

export default RecommendProduct

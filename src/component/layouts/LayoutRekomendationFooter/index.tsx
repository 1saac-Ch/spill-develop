import Button from '@/component/elements/Button'
import React from 'react'

const LayoutRekomendationFooter = () => {
  return (
    <div className="flex justify-center bg-[#E8FBF5]">
        <div className='w-full py-3 max-w-screen-xl'>
          <div className='flex justify-between items-center my-8'>
            <div className='flex-[1.8]'>
              <h1 className='text-xl font-tebal'> 🔍 Produk yang kamu cari tidak ada di spill?</h1>
              <p> ayo bantu sarankan kami untuk menuliskan produk yang kamu cari</p>
            </div>
            <div className='flex-[0.2]'>
              <Button>Sarankan Produk</Button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LayoutRekomendationFooter
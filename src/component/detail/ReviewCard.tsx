import React from 'react'
import StarIcon from '../elements/StarIcon'
import LikeIcon from '../elements/LikeIcon'
import Button from '../elements/Button/component'

const ReviewCard = () => {
  return (
    <div className="space-y-2 w-full">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#705CF6]" />
        <p className="font-satoshi text-label-lg font-bold">Nama Reviewer</p>
      </div>

      <div className="ml-10 space-y-2">
        <div className="flex gap-[10px]">
          <StarIcon size={20} color="#f26e21" />
          <StarIcon size={20} color="#f26e21" />
          <StarIcon size={20} color="#f26e21" />
          <StarIcon size={20} color="#a6a6a6" />
          <StarIcon size={20} color="#a6a6a6" />
        </div>
        <h5 className="text-label-lg font-[900] font-satoshi">Title Review</h5>
        <p className="text-label-lg font-satoshi">
          Lorem ipsum dolor sit amet consectetur. Erat tortor sagittis risus id
          fringilla arcu hendrerit ridiculus. Sed libero dignissim ultrices
          velit eu. Massa varius varius porttitor dui turpis sodales. ?
        </p>
        <p className="font-satoshi text-label-lg text-[#8C8C8C]">
          3 Minggu lalu
        </p>

        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-2">
            <LikeIcon />
            <Button
              variant="outline"
              className="border-none text-[#A6A6A6] w-fit p-0"
            >
              Membantu
            </Button>
          </div>

          <span className="text-[#A6A6A6]">|</span>

          <p className="font-satoshi text-[#8C8C8C] text-label-lg">
            5 Orang Terbantu
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard

import React from 'react'
import StarIcon from '../elements/StarIcon'
import LikeIcon from '../elements/LikeIcon'
import Button from '../elements/Button/component'

type Props = {
  isReply?: boolean
  showLike?: boolean
}

const ButtonArrow = () => (
  <svg
    width="18"
    height="9"
    viewBox="0 0 18 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.9215 0.949951L10.4015 7.46995C9.63154 8.23995 8.37154 8.23995 7.60154 7.46995L1.08154 0.949951"
      stroke="#1598CC"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

const ReviewCard = ({ isReply, showLike }: Props) => {
  return (
    <div className={`${isReply ? 'ml-11' : ''} space-y-2 w-full`}>
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
          velit eu. Massa varius varius porttitor dui turpis sodalesddddd. ?
        </p>
        <p className="font-satoshi text-label-lg text-[#8C8C8C]">
          3 Minggu lalu
        </p>

        {showLike ? (
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
        ) : null}
      </div>

      {isReply ? (
        <button className="flex items-center gap-2">
          <ButtonArrow />

          <span className="font-satoshi text-label-lg font-bold text-blue-50">
            Lihat Semua Balasan
          </span>
        </button>
      ) : null}
    </div>
  )
}

export default ReviewCard

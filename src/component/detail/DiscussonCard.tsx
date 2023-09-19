import React from 'react'
import LikeIcon from '../elements/LikeIcon'

type Props = {
  isReply?: boolean
} & Discussion

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
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const DiscussionCard = ({
  isReply,
  createdAt,
  description,
  name,
  replies,
}: Props) => {
  return (
    <>
      <div className={`${isReply ? 'ml-11' : ''} space-y-2 pr-3 pb-3`}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#705CF6]" />
          <p className="font-satoshi text-label-lg font-bold">{name}</p>
        </div>

        <div className="ml-10 space-y-2">
          <p className="text-label-lg font-satoshi">{description}</p>
          <div className="flex gap-3">
            <p className="font-satoshi text-label-lg text-[#8C8C8C]">
              {createdAt}
            </p>

            <button className="text-label-lg text-[#8C8C8C] font-bold">
              Reply
            </button>
          </div>
        </div>
      </div>

      {replies.length
        ? replies.map((replie) => (
            <DiscussionCard key={replie.id} {...replie} isReply />
          ))
        : null}
    </>
  )
}

export default DiscussionCard

import React from 'react'
import StarIcon from '../elements/StarIcon'
import LikeIcon from '../elements/LikeIcon'
import formatDateAndTimeAgo from '@/utils/formatDate'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type Props = {
  isReply?: boolean
  showLike?: boolean
} & Review

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

const ReviewCard = ({
  isReply,
  showLike,
  title,
  createdAt,
  description,
  likes,
  user,
  rating,
  media,
  id,
}: Props) => {
  const mediaReview = JSON.parse(media) as string[]
  const { data: session } = useSession()
  const router = useRouter()

  const queryClient = useQueryClient()

  async function handleLike(id: string) {
    if (!session?.accessToken) {
      const searchParam = new URLSearchParams({ callbackUrl: router.asPath })
      router.replace('/login?' + searchParam.toString())
    } else {
      // FETCH
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL!}/review/${id}/like`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        })
        queryClient.invalidateQueries({
          queryKey: ['review', id],
        })
        // TODO : IMPLEMENT OPTIMISTIC UPDATE !!!!
      } catch (error) {
        console.log('e', error)
        return
      }
    }
  }

  let likedByUser = false
  if (session?.user.fullname === user.fullname) {
    likedByUser = true
  }

  return (
    <>
      <div className={`${isReply ? 'ml-11' : ''} space-y-2 pr-3 pb-3`}>
        <div className="flex items-center gap-3">
          <img
            src="/profile.jpeg"
            alt="profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <p className="font-satoshi text-label-lg font-bold">
            {user.username}
          </p>
        </div>

        <div className="ml-10 space-y-2">
          <div className="flex gap-[10px]">
            {Array(5)
              .fill(0)
              .map((_, idx) => (
                <StarIcon
                  key={idx}
                  size={20}
                  color={idx + 1 <= rating ? '#f26e21' : '#A6A6A6'}
                />
              ))}
          </div>
          <h5 className="text-label-lg font-[900] font-satoshi">{title}</h5>
          <p className="text-label-lg font-satoshi">{description}</p>

          <div className="flex gap-4">
            {mediaReview?.length
              ? mediaReview.map((item, i) => (
                  <button
                    key={item}
                    className="w-[60px] h-[60px] md:w-20 md:h-20 rounded-lg border-2 border-[#1598CC]"
                  >
                    <img
                      alt={`img-${i}`}
                      src={item}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))
              : null}
          </div>

          <p className="font-satoshi text-label-lg text-[#8C8C8C]">
            {formatDateAndTimeAgo(createdAt)}
          </p>

          {showLike ? (
            <div className="flex gap-3 items-center">
              <button
                onClick={() => handleLike(id)}
                className="flex items-center gap-2 group"
              >
                <LikeIcon
                  className={`${
                    likedByUser
                      ? 'fill-[#1598CC]'
                      : 'group-hover:fill-[#1598CC]'
                  }`}
                />
                <p
                  className={`${
                    likedByUser
                      ? 'text-[#1598CC]'
                      : 'group-hover:text-[#1598CC] text-[#A6A6A6]'
                  } border-none font-bold  w-fit p-0`}
                >
                  Membantu
                </p>
              </button>

              <span className="text-[#A6A6A6]">|</span>

              <p className="font-bold text-[#8C8C8C] text-label-lg">
                {likes} Orang Terbantu
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default ReviewCard

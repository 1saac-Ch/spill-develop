import React, { useState } from 'react'
import StarIcon from '../elements/StarIcon'
import LikeIcon from '../elements/LikeIcon'
import formatDateAndTimeAgo from '@/utils/formatDate'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useQueryClient } from '@tanstack/react-query'
import useFetcher from '@/hooks/useFetcher'
import { Dialog, DialogContent } from '../ui/Dialog'

type Props = {
  isReply?: boolean
  showLike?: boolean
} & Review

type LikeResponse = {
  getData: { userId: string; reviewId: string }[]
}

const ReviewCard = ({
  isReply,
  showLike,
  title,
  createdAt,
  description,
  user,
  rating,
  media,
  id,
}: Props) => {
  const { data: session } = useSession()
  const router = useRouter()

  const queryClient = useQueryClient()

  const { data: dataLike } = useFetcher<LikeResponse>(`/review/${id}/like`)

  const like = dataLike?.getData || []

  let likedByUser = false
  if (session?.user) {
    likedByUser = like.some((item) => item.userId === session.user.id)
  }

  async function handleLike(id: string) {
    if (!session?.accessToken) {
      const searchParam = new URLSearchParams({ callbackUrl: router.asPath })
      router.push('/login?' + searchParam.toString())
    } else {
      // FETCH
      try {
        // Optimistic Update the like
        queryClient.setQueryData(
          ['review', id, 'like'],
          (oldVal: LikeResponse | undefined) => {
            if (!oldVal) return undefined
            let newVal: any
            if (likedByUser) {
              newVal = oldVal.getData.filter((val: any) => {
                return val.userId !== session.user.id
              })
            } else {
              newVal = [
                ...oldVal.getData,
                { userId: session.user.id, reviewId: id },
              ]
            }
            return { ...oldVal, getData: newVal }
          }
        )
        await fetch(`${process.env.NEXT_PUBLIC_API_URL!}/review/${id}/like`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        })
      } catch (error) {
        queryClient.invalidateQueries(['review', id, 'like'])
        return
      }
    }
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
            {user?.username || 'Anonymous user'}
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
            <MediaReview mediaReview={media} />
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
                  className={`${likedByUser ? 'fill-[#1598CC]' : ''}`}
                />
                <p
                  className={`${
                    likedByUser ? 'text-[#1598CC]' : 'text-[#A6A6A6]'
                  } border-none font-bold  w-fit p-0`}
                >
                  Membantu
                </p>
              </button>

              <span className="text-[#A6A6A6]">|</span>

              <p className="font-bold text-[#8C8C8C] text-label-lg">
                {like.length} Orang Terbantu
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default ReviewCard

function MediaReview({ mediaReview }: { mediaReview: string[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const modalOpen = activeIndex !== null

  function openChange(newVal: boolean) {
    if (!newVal) {
      setActiveIndex(null)
    }
  }

  if (!mediaReview) return null

  return (
    <>
      <Dialog open={modalOpen} onOpenChange={openChange}>
        <DialogContent className="flex flex-col w-[0px] md:w-[0px] lg:w-[0px] p-0 translate-x-[k] translate-y-[k] bg-blue-200">
          <button
            disabled={activeIndex === 0}
            onClick={() => setActiveIndex((prev) => prev && prev - 1)}
            className="fixed left-5 md:left-4 text-white disabled:text-neutral-400 disabled:cursor-not-allowed"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-7 md:h-7 lg:w-10 lg:h-10"
            >
              <path
                d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <img
            src={mediaReview[activeIndex ?? 0]}
            alt={`img-${activeIndex}`}
            className="min-w-[80vw] md:min-w-[400px] lg:min-w-[800px] flex-none object-cover translate-x-[-50%] translate-y-[-50%] z-[10]"
          />

          <button
            disabled={activeIndex === mediaReview.length - 1}
            onClick={() => setActiveIndex((prev) => prev! + 1)}
            className="fixed right-5 md:right-4 text-white disabled:text-neutral-400 disabled:cursor-not-allowed "
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-7 md:h-7 lg:w-10 lg:h-10"
            >
              <path
                d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </DialogContent>
      </Dialog>
      {mediaReview?.length
        ? mediaReview.map((item, i) => (
            <button
              onClick={() => setActiveIndex(i)}
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
    </>
  )
}

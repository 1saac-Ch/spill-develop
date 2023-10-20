import React, { FormEvent, useContext } from 'react'
import LikeIcon from '../elements/LikeIcon'
import { DiscussionForm, discussionListContext } from './WriteDiscussion'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useQueryClient } from '@tanstack/react-query'

type Props = {
  isReply?: boolean
  isSending?: boolean
  replies?: Discussion[]
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
  waktu,
  user,
  body,
  isSending = false,
  replies = [],
  id,
}: Props) => {
  const { data: session } = useSession()
  const router = useRouter()
  const queryClient = useQueryClient()
  const { isOpenDiscusionIdReply, setIsOpenDiscusionIdReply } = useContext(
    discussionListContext
  )

  const currentDiscussionOpen = isOpenDiscusionIdReply === id

  const productId = router.query.id

  async function handleSendReply(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!session) {
      router.push(
        `/login?${new URLSearchParams({
          callbackUrl: `/detail-product/${productId}`,
        }).toString()}`
      )
      return
    }

    const { reviewContent } = e.target as EventTarget & {
      reviewContent: { value: string }
    }

    const body = reviewContent.value

    // queryClient.setQueryData(
    //   ['discussion', productId],
    //   (oldValue: DiscussionQuery | undefined) => {
    //     if (!oldValue) return undefined
    //     const oldDiscussion = oldValue.data.discussionsWithTime

    //     const newDiscussion = [
    //       ...oldDiscussion,
    //       {
    //         userId: session.user.id,
    //         body,
    //         user: {
    //           waktu: 'Baru saja',
    //           username: session.user.username,
    //         },
    //         isSending: true,
    //       },
    //     ] as any

    //     return { data: { discussionsWithTime: newDiscussion } }
    //   }
    // )

    reviewContent.value = ''

    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/discussion/${productId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.accessToken}`,
          },
          body: JSON.stringify({
            body,
            parentId: id,
          }),
        }
      )
      setIsOpenDiscusionIdReply(null)
    } catch (error) {
      console.log('e', error)
    } finally {
      queryClient.refetchQueries({
        queryKey: ['discussion', productId],
      })
    }
  }
  return (
    <>
      <div
        className={`${isReply ? 'ml-11' : ''} ${
          isSending ? 'opacity-60' : ''
        } space-y-2 pr-3 pb-3`}
      >
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            {user.profileImage ? (
              <img
                src={user.profileImage || ''}
                alt=""
                className="absolute bg-cover inset-0"
              />
            ) : (
              <div className="bg-purple-600 absolute inset-0" />
            )}
          </div>
          <p className="font-satoshi text-label-lg font-bold">
            {user.username}
          </p>
        </div>

        <div className="ml-10 space-y-2 bg-blue">
          <p className="text-label-lg font-satoshi">{body}</p>
          <div className="flex gap-3">
            <p className="font-satoshi text-label-lg text-[#8C8C8C]">{waktu}</p>

            <button
              onClick={() => {
                setIsOpenDiscusionIdReply(id)
              }}
              className="text-label-lg text-[#8C8C8C] font-bold"
            >
              Reply
            </button>
          </div>
        </div>

        {currentDiscussionOpen ? (
          <form onSubmit={handleSendReply} className="ml-10">
            <DiscussionForm />
          </form>
        ) : null}
      </div>

      {replies?.length
        ? replies.map((replie) => (
            <DiscussionCard key={replie.id} {...replie} isReply />
          ))
        : null}
    </>
  )
}

export default DiscussionCard

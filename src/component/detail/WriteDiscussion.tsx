import React, { FormEvent } from 'react'
import SendIcon from '../elements/SendIcon'
import ReviewCard from './ReviewCard'
import DiscussionCard from './DiscussonCard'
import useFetcher from '@/hooks/useFetcher'
import { useRouter } from 'next/router'
import { useQueryClient } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'

// const discussions: Discussion[] = [
//   {
//     id: 1,
//     userId: '0e8ebece-314d-429a-a5cf-f4c20b1037e1',
//     productId: 'PD0001',
//     body: 'Tes discussion',
//     parentId: null,
//     createdAt: '2023-09-22T02:29:13.000Z',
//     updatedAt: '2023-09-22T02:29:13.000Z',
//     user: {
//       fullname: 'testingspill1',
//       username: 'spilluser423',
//       email: null,
//       no_hp: '622812345631',
//     },
//     waktu: '15 menit yang lalu',
//   },
// ]

type DiscussionQuery = {
  data: { discussionsWithTime: Discussion[] }
}

const WriteDiscussion = () => {
  const router = useRouter()
  const productId = router.query.id

  const queryClient = useQueryClient()
  const { data: session } = useSession()

  const { data, isLoading, isError } = useFetcher<DiscussionQuery>(
    `/discussion/${productId}`
  )

  const discussions = data?.data.discussionsWithTime

  let content
  if (isLoading) {
    content = <p className="text-center font-semibold">Loading ...</p>
  } else if (isError) {
    content = (
      <p className="text-center font-semibold">
        Ada error nih, silahkan coba lagi nanti.
      </p>
    )
  } else if (!discussions?.length) {
    content = (
      <p className="text-center font-semibold">
        Belum ada diskusi untuk produk ini. Jadilah yang pertama menuliskan
        diskusi.
      </p>
    )
  } else {
    content = discussions.map((disc) => (
      <DiscussionCard key={disc.id} {...disc} />
    ))
  }

  async function handleSendDiscussion(e: FormEvent<HTMLFormElement>) {
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

    queryClient.setQueryData(
      ['discussion', productId],
      (oldValue: DiscussionQuery | undefined) => {
        if (!oldValue) return undefined
        const oldDiscussion = oldValue.data.discussionsWithTime

        const newDiscussion = [
          ...oldDiscussion,
          {
            userId: session.user.id,
            body,
            user: {
              waktu: 'Baru saja',
              username: session.user.username,
            },
            isSending: true,
          },
        ] as any

        return { data: { discussionsWithTime: newDiscussion } }
      }
    )

    reviewContent.value = ''

    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/discussion/${productId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.accessToken}`,
        },
        body: JSON.stringify({
          body,
          parentId: null,
        }),
      }
    )
  }

  return (
    <div className="w-full flex flex-col gap-10 md:gap-3">
      <form onSubmit={handleSendDiscussion} className="space-y-3">
        <label
          htmlFor="new-review"
          className="text-label-lg font-bold font-satoshi"
        >
          Apa yang menjadi keresahanmu dalam memilih produk?
        </label>
        <fieldset className="relative rounded-xl h-[104px] border md:px-4 md:py-3">
          <textarea
            id="new-review"
            name="reviewContent"
            className="w-full outline-none p-4 md:p-0 resize-none h-full placeholder:text-abu text-label-lg placeholder:text-label-lg font-satoshi placeholder:font-satoshi"
            placeholder="Review kamu disini"
          />
          <button className="absolute bottom-3 right-3" type="submit">
            <span>
              <SendIcon color="#1598CC" size={20} />
            </span>
          </button>
        </fieldset>
      </form>

      {content}
    </div>
  )
}

export default WriteDiscussion

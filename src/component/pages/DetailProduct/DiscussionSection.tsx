import ReviewCard from '@/component/detail/ReviewCard'
// import WriteDiscussion from '@/component/detail/WriteDiscussion'
import WriteReview from '@/component/detail/WriteReview'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/component/elements/Tabs'
// import TabsInfluencerContent from './TabsInfluencerContent'
import useFetcher from '@/hooks/useFetcher'

const DiscussionSection = ({ productId }: { productId: string }) => {
  const {
    data: replies,
    isLoading: isRepliesLoading,
    isError,
  } = useFetcher<{ data: Review[] }>(`/review/${productId}`)

  let ReplieContent
  if (isRepliesLoading) {
    ReplieContent = <p className="text-center font-semibold">Loading ...</p>
  } else if (isError) {
    ReplieContent = (
      <p className="text-center font-semibold">
        Ada error nih silahkan coba lagi nanti
      </p>
    )
  } else if (!replies.data.length) {
    ReplieContent = (
      <p className="text-center font-semibold">
        Belum ada review untuk produk ini, jadilah yang pertama menuliskan
        review
      </p>
    )
  } else {
    ReplieContent = replies.data.map((replie) => (
      <ReviewCard showLike key={replie.id} {...replie} />
    ))
  }

  if (isError) return <p>Error</p>

  return (
    <Tabs defaultValue="review" className="main-container pt-0 bg-white pb-10">
      <TabsList className="flex flex-row justify-start mb-10 bg-transparent">
        <TabsTrigger className="flex-1" value="review">
          Review
        </TabsTrigger>
        {/* <TabsTrigger className="flex-1" value="diskusi">
          Diskusi
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="influencer">
          Konten Influencer
        </TabsTrigger> */}
      </TabsList>
      <TabsContent value="review" className="space-y-10">
        <WriteReview />
        <div className="space-y-10 px-10">{ReplieContent}</div>
      </TabsContent>
      {/* <TabsContent value="diskusi">
        <div className="px-5 md:px-10">
          <WriteDiscussion />
        </div>
      </TabsContent>
      <TabsContent value="influencer">
        <TabsInfluencerContent />
      </TabsContent> */}
    </Tabs>
  )
}

export default DiscussionSection

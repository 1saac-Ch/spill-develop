import ReviewCard from '@/component/detail/ReviewCard'
import WriteDiscussion from '@/component/detail/WriteDiscussion'
import WriteReview from '@/component/detail/WriteReview'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/component/elements/Tabs'
import MainContentTiktok from '@/component/main/MainContentTiktok'
import MainContentYoutube from '@/component/main/MainContentYoutube'
import React from 'react'

const DiscussionSection = () => {
  return (
    <Tabs
      defaultValue="review"
      className="container mx-auto mb-14 px-5 bg-white"
    >
      <TabsList className="flex flex-row justify-start mb-10 bg-transparent">
        <TabsTrigger className="flex-1" value="review">
          Review
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="diskusi">
          Diskusi
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="influencer">
          Konten Influencer
        </TabsTrigger>
      </TabsList>
      <TabsContent value="review" className="space-y-10">
        <WriteReview />
        <div className="space-y-10 px-10">
          <ReviewCard showLike />
          <ReviewCard showLike />
        </div>
      </TabsContent>
      <TabsContent value="diskusi">
        <div className="px-10">
          <WriteDiscussion />
        </div>
      </TabsContent>
      <TabsContent value="influencer">
        <div className="px-10">
          <MainContentYoutube />
          <MainContentTiktok />
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default DiscussionSection

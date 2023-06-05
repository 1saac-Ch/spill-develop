import ReviewCard from '@/component/detail/ReviewCard'
import WriteDiscussion from '@/component/detail/WriteDiscussion'
import WriteReview from '@/component/detail/WriteReview'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/component/elements/Tabs'
import React from 'react'

const DiscussionSection = () => {
  return (
    <Tabs defaultValue="review" className="container mx-auto bg-white mb-14">
      <TabsList className="grid w-full grid-cols-3 mb-10">
        <TabsTrigger value="review">Review</TabsTrigger>
        <TabsTrigger value="diskusi">Diskusi</TabsTrigger>
        <TabsTrigger value="influencer">Konten Influencer</TabsTrigger>
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
        <h1>Hello</h1>
      </TabsContent>
    </Tabs>
  )
}

export default DiscussionSection

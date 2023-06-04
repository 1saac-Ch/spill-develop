import ReviewCard from '@/component/detail/ReviewCard'
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
    <Tabs defaultValue="review" className="w-full bg-white">
      <TabsList className="grid w-full grid-cols-3 mb-10">
        <TabsTrigger value="review">Review</TabsTrigger>
        <TabsTrigger value="diskusi">Diskusi</TabsTrigger>
        <TabsTrigger value="influencer">Konten Influencer</TabsTrigger>
      </TabsList>
      <TabsContent value="review" className="space-y-10">
        <WriteReview />

        <div className="space-y-10">
          <ReviewCard />
          <ReviewCard />
        </div>
      </TabsContent>
      <TabsContent value="diskusi">
        <h1>Hello</h1>
      </TabsContent>
      <TabsContent value="influencer">
        <h1>Hello</h1>
      </TabsContent>
    </Tabs>
  )
}

export default DiscussionSection

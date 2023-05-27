import React from 'react'
import Feature1 from '@/assets/images/feature1.png'
import Feature2 from '@/assets/images/feature2.png'
import Feature3 from '@/assets/images/feature3.png'
import Feature4 from '@/assets/images/feature4.png'
import Feature5 from '@/assets/images/feature5.png'
import Feature6 from '@/assets/images/feature6.png'
import Image, { StaticImageData } from 'next/image'

type FeatureData = {
  title: string
  description: React.ReactNode
  image: React.ReactNode
}[]

export const featureData: FeatureData = [
  {
    title: 'Discover product',
    description: (
      <>
        Users can search for anything. Spill provides a <br /> database of many
        products from various brands, types and categories.
      </>
    ),
    image: (
      <Image
        className="object-contain mx-auto h-[235px]"
        src={Feature1}
        width={275}
        height={220}
        alt={`feature-1`}
      />
    ),
  },
  {
    title: 'Read Review or Ask',
    description: (
      <>
        no more #KemakanEndorse bcs at Spill,
        <br /> community gave #RealReviewJujur. If the user <br /> have dilemma
        or wondering, they can ask
      </>
    ),
    image: (
      <Image
        className="object-contain mx-auto w-[358px] h-[235px]"
        src={Feature2}
        width={275}
        height={220}
        alt={`feature-2`}
      />
    ),
  },
  {
    title: 'Choose E-commerce',
    description: (
      <>
        Spill provides the best choice in various E-
        <br />
        commerce. Spill will customize a url for affiliate link that will
        redirect to the E-commerce page.
      </>
    ),
    image: (
      <Image
        className="object-contain mx-auto w-[223px] h-[220px]"
        src={Feature3}
        width={275}
        height={220}
        alt={`feature-3`}
      />
    ),
  },
  {
    title: 'Checkout Product',
    description: (
      <>
        Users can checkout as usual at their favorite E-
        <br />
        commerce with the discount or free shipping offered by the Ecommerce
        itself.
      </>
    ),
    image: (
      <Image
        className="object-contain mx-auto w-[173px] h-[209px]"
        src={Feature4}
        width={275}
        height={220}
        alt={`feature-4`}
      />
    ),
  },
  {
    title: 'Write your review',
    description: (
      <>
        After checkout it, users can become part of the <br /> community by
        writing their product review. This is to help others in the community
        too
      </>
    ),
    image: (
      <Image
        className="object-contain mx-auto w-[224px] h-[220px]"
        src={Feature5}
        width={275}
        height={220}
        alt={`feature-5`}
      />
    ),
  },
  {
    title: 'Influencers Content',
    description: (
      <>
        Influencers are also part of the community who <br /> provide more
        detailed product reviews by creating content on social media.
      </>
    ),
    image: (
      <Image
        className="object-contain mx-auto w-[197px] h-[220px]"
        src={Feature6}
        width={275}
        height={220}
        alt={`feature-6`}
      />
    ),
  },
]

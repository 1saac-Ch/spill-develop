import React from 'react'
import styles from './index.module.scss'
import LogoLarge from '@/assets/images/Logo-large.png'
import Image from 'next/image'

const WaitlistJourney = () => {
  return (
    <div className="relative flex justify-center w-screen pb-10 ">
      <div className={styles.roundedTopHotReview} />
      <div className={styles.maxContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={LogoLarge}
              fill
              className="object-contain"
              alt="spill-logo-large"
            />
          </div>

          <div className={styles.textContainer}>
            <h1 className={styles.heading}>How this journey began</h1>

            <p className={styles.paragraph}>
              Spiill is a peer-to-peer e-commerce platform that aims to solve
              the problem of product purchase decision-making by providing a
              community-based approach to product reviews. Our research has
              shown that 84% of users difficult to decide which product to
              purchase due to the overwhelming number of options available,
              taking an average of 7 days to finalize their choice. The unique
              finding is that reviews are the main trigger for people to make
              online purchases after free shipping. Spiill`s business model is
              based on affiliate marketing and advertising, similar to Shopback
              and iPrice, but we focus on review products.
            </p>

            <p className={styles.paragraph}>
              We have joined the Tanoto Foundation and Angin Investment program
              to accelerate our growth, and we have a strong team of 9 members
              with expertise in their respective fields. Spiill is a promising
              startup that addresses a common pain point for online shoppers. By
              leveraging the power of community-based reviews, the platform aims
              to help users make informed decisions and simplify the product
              selection process. With a sound business model and the support of
              notable investors, Spiill has the potential to become a
              game-changer in the e-commerce industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaitlistJourney

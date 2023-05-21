import React, { JSXElementConstructor, ReactElement, useState } from 'react'

import styles from './index.module.scss'

import Button from '@/component/elements/Button/component'
import MainFeature from '@/component/main/MainFeature'
import WaitlistLayout from '@/component/layouts/LayoutWaitlist'
import WaitlistJourney from '@/component/waitlist/WaitlistJourney'

const WaitlistPage = () => {
  return (
    <main>
      <div className="bg-radial bg-[#111827] w-full h-[100vh]">
        <div className="mx-auto h-full flex items-center">
          <div className={styles.wording}>
            <div className={styles.maxWording}>
              <h1>
                Cari produk, Baca review, Checkout, lalu <label>Spill</label>{' '}
                disini.
              </h1>
            </div>
            <p>
              Yakali masih bingung mau checkout apa hari ini, sini Spiill dulu
            </p>

            <Button className="w-[141px] mt-5">Join waitlist</Button>
          </div>
        </div>
      </div>
      <WaitlistJourney />
      <MainFeature />
    </main>
  )
}

WaitlistPage.getLayout = (
  page: ReactElement<any, string | JSXElementConstructor<any>>
) => <WaitlistLayout>{page}</WaitlistLayout>

export default WaitlistPage

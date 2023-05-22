import React, { JSXElementConstructor, ReactElement, useState } from 'react'

import styles from './index.module.scss'
import addItem from '@/assets/icons/Additem.svg'

import MainFeature from '@/component/main/MainFeature'
import WaitlistLayout from '@/component/layouts/LayoutWaitlist'
import WaitlistJourney from '@/component/waitlist/WaitlistJourney'
import WaitlistContact from '@/component/waitlist/WaitlistContact'
import Image from 'next/image'

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

            <a
              target="_blank"
              href="https://forms.gle/SDMKNWpEwE1UNXpi8"
              className={styles.buttonWaitlist}
            >
              <span>
                <Image
                  src={addItem}
                  width={20}
                  height={20}
                  className="object-contain mr-3"
                  alt="add-item-icon"
                />
              </span>
              Join waitlist
            </a>
          </div>
        </div>
      </div>
      <WaitlistJourney />
      <MainFeature />
      <WaitlistContact />
    </main>
  )
}

WaitlistPage.getLayout = (
  page: ReactElement<any, string | JSXElementConstructor<any>>
) => <WaitlistLayout>{page}</WaitlistLayout>

export default WaitlistPage

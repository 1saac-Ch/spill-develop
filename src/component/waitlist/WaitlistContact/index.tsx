import React from 'react'
import styles from './index.module.scss'
import pattern from '@/assets/icons/Pattern.svg'
import Image from 'next/image'

const WaitlistContact = () => {
  return (
    <div className={styles.contactContainer}>
      <h3 className={styles.smallHeading}>let `s collaborate!</h3>

      <div className="space-y-3">
        <p className={styles.contactUs}>contact us</p>

        <h1 className={styles.founder}>founders@spiill.com</h1>
      </div>

      <Image src={pattern} className={styles.pattern} alt="pattern" />
    </div>
  )
}

export default WaitlistContact

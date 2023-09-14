import React from 'react'
import styles from './styles.module.scss'
import Button from '@/component/elements/Button'
import Link from 'next/link'

const LayoutRekomendationFooter = () => {
  return (
    <div className={styles.layoutRecomend}>
      <div className="main-container w-full">
        <div className={styles.mainRecomend}>
          <div className={styles.stackResponsive}>
            <h1 className={styles.textFindProduct}>
              {' '}
              🔍 Produk yang kamu cari tidak ada di spill?
            </h1>
            <p className={styles.paragraphText}>
              {' '}
              ayo bantu sarankan kami untuk menuliskan produk yang kamu cari
            </p>
          </div>
          <div className={styles.buttonResponsive}>
            <Link
              className="flex items-center justify-center px-4 py-3 w-max rounded-xl text-white bg-blue-50 text-label-lg font-bold"
              href="/suggest"
            >
              Sarankan Produk
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutRekomendationFooter

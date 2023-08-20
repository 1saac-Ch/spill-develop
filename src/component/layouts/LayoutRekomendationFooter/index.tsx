import React from 'react'
import styles from './styles.module.scss'
import Button from '@/component/elements/Button'

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
            <Button className={styles.buttonRecomended}>Sarankan Produk</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutRekomendationFooter

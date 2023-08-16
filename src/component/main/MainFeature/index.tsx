import React from 'react'
import { featureData } from '@/constant/feature'
import styles from './index.module.scss'

const MainFeature = () => {
  return (
    <div className={styles.featureWrapper}>
      <h1>Feature.</h1>

      <div className={styles.featureContainer}>
        {featureData.map((data, i) => (
          <>
            <div className="text-center">
              <div className="min-h-[235px]">{data.image}</div>
              <div className={styles.featureInfo}>
                <span className={styles.number}>{i + 1}</span>
                <h3 className={styles.featureTitle}>{data.title}</h3>
              </div>
              <p className={styles.featureDescription}>{data.description}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default MainFeature

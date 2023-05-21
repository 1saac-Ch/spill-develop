import React from 'react'
import { feature } from '@/component/pages/Home/dummy.api';
import styles from "./index.module.scss";
import Image from "@/component/elements/NextImage";

const MainFeature = () => {
  return (
    <div className={styles.feature}>
        <div className={styles.maxContainer}>
          <h1 className={styles.titleContent}>Feature.</h1>
          <div className="flex flex-wrap gap-7 justify-between p-5 mt-[40px]">
            {feature.map((item, index) => (
              <Image placeholder='blur' key={index} src={item.image} width={378} height={344} alt="test" />
            ))}
          </div>
        </div>
      </div>
  )
}

export default MainFeature
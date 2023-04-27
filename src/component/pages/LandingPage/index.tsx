import React from 'react'
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import styles from "./styles.module.scss";
import ImageLanding from "@/assets/images/landing.png";
import Button from '@/component/elements/Button';
import { useRouter } from 'next/router';
import SpillLogo from '@/component/elements/SpillLogo';

const LandingPgae = () => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="We will launch on May, 2023 🚀 "
        titleTemplate="%s | Spiill"
        description="We cant wait for you to be a part of this journey"
      />
      <div className={styles.root}>
        <div className={styles.header}>
          <SpillLogo multiplySize={0.5} isDark={true} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image src={ImageLanding} alt="logo" />
          </div>
          <h1>We will launch on May, 2023 🚀 </h1>
          <p>We can’t wait for you to be a part of this journey</p>
          <div className={styles.bottom}>
            <Button onClick={() => router.push("mailto:founders@spiil.com")}>Contact Us founders@spiil.com</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPgae
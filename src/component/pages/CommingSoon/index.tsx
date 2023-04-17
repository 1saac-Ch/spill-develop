import React from 'react'
import Image from 'next/image';
import styles from "./index.module.scss";
import LogoSpill from "@/assets/icons/Logo.svg";
import ImageLanding from "@/assets/images/landing.png";
import Button from '@/component/elements/Button';
import { useRouter } from 'next/router';

const LandingPgae = () => {
    const router = useRouter();
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <Image src={LogoSpill} alt="logo" priority />
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
    )
}

export default LandingPgae
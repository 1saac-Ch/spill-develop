import React from 'react';
import { ReactElement, JSXElementConstructor } from 'react';
import styles from "./index.module.scss";

import MainLayout from '@/component/layouts/MainLayout';
import Search from "@/component/elements/Search";
import MainHotReview from '@/component/main/MainHotReview';

import MainFeature from '@/component/main/MainFeature';
import MainBannerAds from '@/component/main/MainBannerAds';
import MainArticles from '@/component/main/MainArticles';
import MainContentReview from '@/component/main/MainContentReview';


const Home = () => {


  return (
    <main>
      <div className="bg-radial bg-[#111827] w-full h-[100vh]">
        <div className="mx-auto h-full flex items-center">
          <div className={styles.wording}>
            <div className={styles.maxWording}>
              <h1>Cari produk, Baca review, Checkout, lalu <label>Spill</label> disini.</h1>
            </div>
            <p>Spill adalah tempat buat bantu kamu yang bingung mau checkout produk apa</p>
            <Search variant="wording" placeholder="Cari produk apapun" />

            <div className={styles.horizontalStack}>
              <div className={styles.keywordHeader}>
                Handphone Murah
              </div>
              <div className={styles.keywordHeader}>
                Skincare
              </div>
              <div className={styles.keywordHeader}>
                Iphone 13 Pro
              </div>
              <div className={styles.keywordHeader}>
                Kamera Terbaik
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainHotReview />
      <MainFeature />
      <MainBannerAds />
      <MainArticles />
      <MainContentReview />
    </main>
  )
}

Home.getLayout = (page: ReactElement<any, string | JSXElementConstructor<any>>) =>
  <MainLayout isNormal={false}>{page}</MainLayout>;

export default Home;
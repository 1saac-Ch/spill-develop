import React from 'react';
import { ReactElement, JSXElementConstructor } from 'react';
import { useRouter } from 'next/router';
import styles from "./index.module.scss";

import MainLayout from '@/component/layouts/MainLayout';
import Search from "@/component/elements/Search";
import Button from '@/component/elements/Button';
import UseDisclosure from '@/component/elements/UseDisclosure';
import MainHotReview from '@/component/main/MainHotReview';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@/component/elements/Modal';

import MainFeature from '@/component/main/MainFeature';
import MainBannerAds from '@/component/main/MainBannerAds';
import MainArticles from '@/component/main/MainArticles';
import MainContentReview from '@/component/main/MainContentReview';


const Home = () => {
  const router = useRouter()

  const { onOpen: onOpenSearch, onClose: onCloseSearch, isOpen: isOpenSearch } = UseDisclosure();


  return (
    <main>
      <div className="bg-radial bg-[#111827] w-full h-[100vh]">
        <div className="mx-auto h-full flex items-center">
          <div className={styles.wording}>
            <div className={styles.maxWording}>
              <h1>Cari produk, Baca review, Checkout, lalu <label>Spill</label> disini.</h1>
            </div>
            <p>Spill adalah tempat buat bantu kamu yang bingung mau checkout produk apa</p>
            <Search variant="wording" placeholder="Cari produk apapun" onClick={onOpenSearch} />
            <Modal isOpen={isOpenSearch} onClose={onCloseSearch}>
              <div className="text-center w-max border-2 boder-black bg-white p-7 rounded-xl">
                <h2 className="md:text-2xl font-bold">Cari Produk Untuk Di Review</h2>
                <p className="mb-4">
                  Cari produk yang akan kamu review
                </p>
                <Search placeholder="Cari produk apapun" />
                <div className=' mt-5 shadow-md flex flex-col justify-start p-4 gap-4'>
                  <h3 className='w-max font-semibold'>🔥 Produk Paling Banyak Dicari:</h3>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                      <div>
                        <SearchIcon />
                      </div>
                      <h4>headphone Steelseries Mxasa</h4>
                    </div>
                    <Button variant="outline" onClick={() => router.push('/review-product')}>Tulis Review</Button>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                      <div>
                        <SearchIcon />
                      </div>
                      <h4>headphone Steelseries Mxasa</h4>
                    </div>
                    <Button variant="outline">Tulis Review</Button>
                  </div>
                </div>
              </div>
            </Modal>
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
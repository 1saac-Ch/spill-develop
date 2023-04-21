import { ReactElement, JSXElementConstructor } from 'react';
import MainLayout from '@/component/layouts/MainLayout';
import styles from "./index.module.scss";
import Search from "@/component/elements/Search";

const Home = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.wording}>
          <h1>Cari produk, Baca review, Checkout, lalu <label>Spill</label> disini.</h1>
          <p>Spill adalah tempat buat bantu kamu yang bingung mau checkout produk apa</p>
          <Search variant="wording" placeholder="Cari produk apapun" />
          <div className={styles.horizontalStack}>
            <div className={styles.keywordHeader}>
              Keyword Rekomendasi
            </div>
            <div className={styles.keywordHeader}>
              Keyword Rekomendasi
            </div>
            <div className={styles.keywordHeader}>
              Keyword Rekomendasi
            </div>
            <div className={styles.keywordHeader}>
              Keyword Rekomendasi
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getLayout = (page: ReactElement<any, string | JSXElementConstructor<any>>) =>
  <MainLayout>{page}</MainLayout>;

export default Home;
import { ReactElement, JSXElementConstructor } from 'react';
import MainLayout from '@/component/layouts/MainLayout';
import styles from "./index.module.scss";
import Search from "@/component/elements/Search";

const Home = () => {
  return (
    <>
      <div className={styles.wording}>
        <h1>Cari produk, Baca review, Checkout, lalu <label>Spill</label> disini.</h1>
        <p>Spill adalah tempat buat bantu kamu yang bingung mau checkout produk apa</p>
        <Search variant="wording" placeholder="Cari produk apapun" />
      </div>
    </>
  )
}

Home.getLayout = (page: ReactElement<any, string | JSXElementConstructor<any>>) =>
  <MainLayout>{page}</MainLayout>;

export default Home;
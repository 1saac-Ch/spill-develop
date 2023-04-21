
import styles from "./styles.module.scss";
import Search from "@/component/elements/Search";
function LandingPage() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.wording}>
          <h1>Cari produk, Baca review, Checkout, lalu <label>Spill</label> disini.</h1>
          <p>Spill adalah tempat buat bantu kamu yang bingung mau checkout produk apa</p>
          <Search variant="wording" placeholder="Cari produk apapun" />
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
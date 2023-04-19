import { ReactNode } from 'react'
import styles from "./styles.module.scss";
import LayoutNavbar from '../LayoutNavbar';

type MainLayoutProps = {
  children: ReactNode;
};


const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.root}>
      <LayoutNavbar />
      <div className={styles.minContainer}>
        {children}
      </div>
    </div>
  )
}

export default MainLayout
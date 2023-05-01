import React, { ReactNode } from 'react'
import styles from "./styles.module.scss";
import LayoutNavbar from '../LayoutNavbar';

type MainLayoutProps = {
  children: ReactNode;
};


const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <React.Fragment>
      <div className={styles.mainLayout}>
        <LayoutNavbar />
        {children}
      </div>
    </React.Fragment>
  )
}

export default MainLayout
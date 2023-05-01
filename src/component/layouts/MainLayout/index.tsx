import React, { ReactNode } from 'react'
import styles from "./styles.module.scss";
import LayoutNavbar from '../LayoutNavbar';
import LayoutFooter from '../LayoutFooter';

type MainLayoutProps = {
  children: ReactNode;
};


const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <React.Fragment>
      <div className={styles.mainLayout}>
        <LayoutNavbar />
        <div className='min-w-screen-xl h-full'>
        {children}
        </div>
        <LayoutFooter />
      </div>
    </React.Fragment>
  )
}

export default MainLayout
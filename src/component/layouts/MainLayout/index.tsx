import { ReactNode } from 'react'
import styles from "./styles.module.scss";
import LayoutNavbar from '../LayoutNavbar';

type MainLayoutProps = {
  children: ReactNode;
};


const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <LayoutNavbar />
      {children}
    </div>
  )
}

export default MainLayout
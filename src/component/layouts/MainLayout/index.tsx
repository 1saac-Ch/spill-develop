import { ReactNode } from 'react'
import styles from "./styles.module.scss";
import LayoutNavbar from '../LayoutNavbar';
import Footer from '../Footer';

type MainLayoutProps = {
  children: ReactNode;
  footer?: boolean;
};


const MainLayout = ({ children, footer }: MainLayoutProps) => {
  return (
    <div>
      <LayoutNavbar />
      {children}
      {footer && <Footer />}
    </div>
  )
}

export default MainLayout
import React, { ReactNode } from 'react'
import styles from './styles.module.scss'
import LayoutNavbar from '../LayoutNavbar'
import LayoutFooter from '../LayoutFooter'
import LayoutRekomendationFooter from '../LayoutRekomendationFooter'
import { useRouter } from 'next/router'

type MainLayoutProps = {
  children: ReactNode
  isNormal: boolean
}

const MainLayout = ({ children, isNormal }: MainLayoutProps) => {
  const router = useRouter()
  return (
    <React.Fragment>
      <div className={styles.mainLayout}>
        <LayoutNavbar normal={isNormal} />
        {children}
        <LayoutRekomendationFooter />
        <LayoutFooter />
      </div>
    </React.Fragment>
  )
}

export default MainLayout

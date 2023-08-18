import React, { ReactNode } from 'react'
import styles from './styles.module.scss'
import LayoutNavbar from '@/component/layouts/LayoutNavbar'
import LayoutFooter from '@/component/layouts/LayoutFooter'

type MainLayoutProps = {
  children: ReactNode
  isNormal: boolean
}

const SuggestLayout = ({ children, isNormal }: MainLayoutProps) => {
  return (
    <React.Fragment>
      <div className={styles.mainLayout}>
        <LayoutNavbar normal={isNormal} />
        {children}
        <LayoutFooter />
      </div>
    </React.Fragment>
  )
}

export default SuggestLayout

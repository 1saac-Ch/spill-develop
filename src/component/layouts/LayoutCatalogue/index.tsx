import React, { ReactNode } from 'react'
import styles from './styles.module.scss'
import LayoutNavbar from './Navbar'
import LayoutFooter from '../LayoutFooter'

type CatalogueProps = {
  children: ReactNode
  isNormal: boolean
}

const CatalogueLayout = ({ children, isNormal }: CatalogueProps) => {
  return (
    <React.Fragment>
      <div className={styles.mainLayout}>
        <LayoutNavbar />
        {children}
        <LayoutFooter />
      </div>
    </React.Fragment>
  )
}

export default CatalogueLayout

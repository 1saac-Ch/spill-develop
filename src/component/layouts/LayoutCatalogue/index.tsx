import React, { ReactNode } from 'react'
import styles from './styles.module.scss'
import LayoutNavbar from '../LayoutNavbar'
import LayoutFooter from '../LayoutFooter'

type CatalogueProps = {
  children: ReactNode
  isNormal: boolean
}

const CatalogueLayout = ({ children, isNormal }: CatalogueProps) => {
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

export default CatalogueLayout

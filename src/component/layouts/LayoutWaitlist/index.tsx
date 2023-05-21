import React, { ReactNode, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import LayoutNavbar from '../LayoutNavbar'
import LayoutFooter from '../LayoutFooter'
import LayoutRekomendationFooter from '../LayoutRekomendationFooter'

import SpillLogo from '@/component/elements/SpillLogo'
import Search from '@/component/elements/Search'
import Button from '@/component/elements/Button/component'

type WaitlistLayout = {
  children: ReactNode
}

const WaitlistNavbar = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  return (
    <nav className={isSticky ? styles.navbarSticky : styles.navbar}>
      <div className="container mx-auto px-5 py-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center w-full justify-between ">
            <div className="flex items-center gap-5 ">
              <SpillLogo multiplySize={0.4} isDark={isSticky ? false : true} />
            </div>
            <div className="hidden md:flex items-center gap-12">
              <div className={styles.item}>
                <Button
                  className={isSticky ? styles.contact : styles.contactSticky}
                >
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

const WaitlistLayout = ({ children }: WaitlistLayout) => {
  return (
    <React.Fragment>
      <div className={styles.mainLayout}>
        <WaitlistNavbar />
        {children}
        <LayoutRekomendationFooter />
        <LayoutFooter />
      </div>
    </React.Fragment>
  )
}

export default WaitlistLayout

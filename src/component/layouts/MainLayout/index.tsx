import React, { ReactNode, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import LayoutFooter from '../LayoutFooter'
import LayoutRekomendationFooter from '../LayoutRekomendationFooter'
import useFetcher from '@/hooks/useFetcher'
import { searchContext } from '../LayoutCatalogue'

import dynamic from 'next/dynamic'

const LayoutNavbar = dynamic(() => import('../LayoutNavbar'), {
  loading: () => null,
  ssr: false,
})

import { cn } from '@/utils/classname'
import { useRouter } from 'next/router'

type MainLayoutProps = {
  children: ReactNode
  isNormal: boolean
}

const MainLayout = ({ children, isNormal }: MainLayoutProps) => {
  const [openSearch, setOpenSearch] = useState(false)

  const router = useRouter()

  const { data } = useFetcher<{
    data: { selection_product: Product[] }
  }>('/home/user', false, {
    refetchOnWindowFocus: false,
  })


  useEffect(() => {
    if (openSearch) {
      setOpenSearch(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  return (
    <React.Fragment>
      <searchContext.Provider value={{ openSearch, setOpenSearch }}>
        <div className={cn(styles.mainLayout, 'backdrop-container')}>
          <LayoutNavbar
            normal={isNormal}
            selectionProduct={data?.data.selection_product ?? []}
          />
          {children}
          <LayoutRekomendationFooter />
          <LayoutFooter />
        </div>
      </searchContext.Provider>
    </React.Fragment>
  )
}

export default MainLayout

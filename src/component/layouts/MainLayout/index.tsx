import React, { ReactNode } from 'react'
import styles from './styles.module.scss'
import LayoutFooter from '../LayoutFooter'
import LayoutRekomendationFooter from '../LayoutRekomendationFooter'
import useFetcher from '@/hooks/useFetcher'

import dynamic from 'next/dynamic'

const LayoutNavbar = dynamic(() => import('../LayoutNavbar'), {
  loading: () => null,
  ssr: false,
})

import { cn } from '@/utils/classname'

type MainLayoutProps = {
  children: ReactNode
  isNormal: boolean
}

const MainLayout = ({ children, isNormal }: MainLayoutProps) => {
  const { data } = useFetcher<{
    data: { selection_product: Product[] }
  }>('/home/user')

  return (
    <React.Fragment>
      <div className={cn(styles.mainLayout, 'backdrop-container')}>
        <LayoutNavbar
          normal={isNormal}
          selectionProduct={data?.data.selection_product ?? []}
        />
        {children}
        <LayoutRekomendationFooter />
        <LayoutFooter />
      </div>
    </React.Fragment>
  )
}

export default MainLayout

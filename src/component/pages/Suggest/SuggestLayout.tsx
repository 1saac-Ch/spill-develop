import { ReactNode, Fragment } from 'react'
import styles from './styles.module.scss'
import LayoutNavbar from '@/component/layouts/LayoutNavbar'
import LayoutFooter from '@/component/layouts/LayoutFooter'
import useFetcher from '@/hooks/useFetcher'

type MainLayoutProps = {
  children: ReactNode
  isNormal: boolean
}

const SuggestLayout = ({ children, isNormal }: MainLayoutProps) => {
  const { data } = useFetcher<{
    data: { selection_product: Product[] }
  }>('/home/user', false, {
    refetchOnWindowFocus: false,
  })
  return (
    <Fragment>
      <div className={styles.mainLayout}>
        <LayoutNavbar
          selectionProduct={data?.data.selection_product ?? []}
          normal={isNormal}
        />
        {children}
        <LayoutFooter />
      </div>
    </Fragment>
  )
}

export default SuggestLayout

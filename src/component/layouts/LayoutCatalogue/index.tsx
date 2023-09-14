import {
  ReactNode,
  Fragment,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'
import styles from './styles.module.scss'
import LayoutNavbar from '../LayoutNavbar'
import LayoutFooter from '../LayoutFooter'

type CatalogueProps = {
  children: ReactNode
  isNormal: boolean
}

export const searchContext = createContext<{
  openSearch: boolean | null
  setOpenSearch: Dispatch<SetStateAction<boolean>> | null
}>({
  openSearch: null,
  setOpenSearch: null,
})

const CatalogueLayout = ({ children, isNormal }: CatalogueProps) => {
  const [openSearch, setOpenSearch] = useState(false)

  return (
    <Fragment>
      <searchContext.Provider value={{ openSearch, setOpenSearch }}>
        <div className={styles.mainLayout}>
          <LayoutNavbar normal={isNormal} />
          {children}
          <LayoutFooter />
        </div>
      </searchContext.Provider>
    </Fragment>
  )
}

export default CatalogueLayout

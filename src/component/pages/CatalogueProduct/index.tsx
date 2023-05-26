import React from 'react'
import { ReactElement, JSXElementConstructor } from 'react'
import styles from './index.module.scss'

import CatalogueLayout from '@/component/layouts/LayoutCatalogue'

const Home = () => {
  return (
    <main>
      <h1>Tes</h1>
    </main>
  )
}

Home.getLayout = (
  page: ReactElement<any, string | JSXElementConstructor<any>>
) => <CatalogueLayout isNormal={false}>{page}</CatalogueLayout>

export default Home

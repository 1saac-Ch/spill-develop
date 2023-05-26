import React from 'react'
import { ReactElement, JSXElementConstructor } from 'react'
import styles from './index.module.scss'

import CatalogueLayout from '@/component/layouts/LayoutCatalogue'

const CatalogueProduct = () => {
  return (
    <main className="min-h-screen px-5 md:px-10">
      <div className="my-16">
        <h1>Tes</h1>
      </div>
    </main>
  )
}

CatalogueProduct.getLayout = (
  page: ReactElement<any, string | JSXElementConstructor<any>>
) => <CatalogueLayout isNormal={true}>{page}</CatalogueLayout>

export default CatalogueProduct

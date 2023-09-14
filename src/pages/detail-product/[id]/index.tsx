import DetailProduct from '@/component/pages/DetailProduct'
import { GetServerSidePropsContext } from 'next'
import ImageProduct from '@/assets/images/product-review.png'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id
  if (!id) throw new Error('Not found')

  // const response = await fetch(process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000")
  // const detailProduct = await response.json()

  return {
    props: {
      product: {
        images: [
          {
            image_product: ImageProduct,
          },
          {
            image_product: ImageProduct,
          },
          {
            image_product: ImageProduct,
          },
          {
            image_product: ImageProduct,
          },
          {
            image_product: ImageProduct,
          },
          {
            image_product: ImageProduct,
          },
          {
            image_product: ImageProduct,
          },
          {
            image_product: ImageProduct,
          },
        ],
        title_name: 'Sony VM-1000x Wireless Headphone Bluetooth',
        brand: 'Sony Store',
        rating: 4.8,
        review: 32,
        disscuss: 12,
        view_product: 1232,
        min_price: 400000,
        max_price: 432000,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui ligula, interdum vitae ornare condimentum, tempus in sem. Nulla facilisi. Ut tortor ligula, semper ac congue ac, tincidunt in massa. Aenean in ultrices felis. Praesent posuere lacus et massa accumsan mattis. Maecenas massa dolor, pharetra viverra iaculis eu, sodales ac magna. Nullam porta aliquet suscipit.',
      },
    },
  }
}

export default DetailProduct

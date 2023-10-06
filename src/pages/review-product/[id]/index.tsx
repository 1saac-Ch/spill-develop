import ReviewProduct from '@/component/pages/ReviewProduct'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id
  if (!id) throw new Error('Not found')

  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/product/' + id
  )

  const data = (await response.json()) as { data: Product[] }
  const product = data.data[0]

  return {
    props: {
      product: {
        product_id: product.product_id,
        product_title: product.product_title,
        images: product.images,
      },
      notFound: !data.data.length,
    },
  }
}

export type ReviewProductProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>

export default ReviewProduct

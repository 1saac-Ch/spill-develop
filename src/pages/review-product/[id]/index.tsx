import ReviewProduct from '@/component/pages/ReviewProduct'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

export async function getStaticProps(context: GetServerSidePropsContext) {
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
    revalidate: 259200,
  }
}

export type ReviewProductProps = InferGetServerSidePropsType<
  typeof getStaticProps
>

export const getStaticPaths = async () => {
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + '/product')
  const ids: { data: Product[] } = await resp.json()

  return {
    paths: ids.data.map((prod) => {
      if (!prod.product_id) return

      return {
        params: {
          id: prod.product_id,
        },
      }
    }),
    fallback: true, // false or "blocking"
  }
}

export default ReviewProduct

import DetailProduct from '@/component/pages/DetailProduct'
import { GetServerSidePropsContext } from 'next'

export async function getStaticProps(context: GetServerSidePropsContext) {
  const id = context.params?.id
  if (!id) throw new Error('Not found')

  const [dataProduct, dataAffiliate] = (await Promise.all([
    fetch(process.env.NEXT_PUBLIC_API_URL + '/product/' + id).then((res) =>
      res.json()
    ),
    fetch(process.env.NEXT_PUBLIC_API_URL + '/affiliate/' + id).then((res) =>
      res.json()
    ),
  ])) as [{ data: Product[] }, { data: Affiliate[] }]

  return {
    props: {
      product: {
        ...dataProduct.data[0],
      },
      affiliate: dataAffiliate.data,
      notFound: !dataProduct.data.length,
    },
    revalidate: 259200,
  }
}

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

export default DetailProduct

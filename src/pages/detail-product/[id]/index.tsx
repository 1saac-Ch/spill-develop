import DetailProduct from '@/component/pages/DetailProduct'
import { GetServerSidePropsContext } from 'next'

export async function getServerSideProps(context: GetServerSidePropsContext) {
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
  }
}

export default DetailProduct

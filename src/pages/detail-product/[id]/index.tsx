import DetailProduct from '@/component/pages/DetailProduct'
import { GetServerSidePropsContext } from 'next'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id
  if (!id) throw new Error('Not found')

  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/product/' + id
  )

  const data = (await response.json()) as { data: Product[] }

  return {
    props: {
      product: {
        ...data.data[0],

        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui ligula, interdum vitae ornare condimentum, tempus in sem. Nulla facilisi. Ut tortor ligula, semper ac congue ac, tincidunt in massa. Aenean in ultrices felis. Praesent posuere lacus et massa accumsan mattis. Maecenas massa dolor, pharetra viverra iaculis eu, sodales ac magna. Nullam porta aliquet suscipit.',
      },
      notFound: !data.data.length,
    },
  }
}

export default DetailProduct

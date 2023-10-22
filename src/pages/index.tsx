import Home from '@/component/pages/Home'
// import data from '@/constant/home-user'
// import article from '@/constant/article'

export async function getStaticProps() {
  const url = process.env.NEXT_PUBLIC_API_URL
  const [homeResponse, articleResponse] = await Promise.all([
    await fetch(`${url}/home/user`),
    await fetch(`${url}/article`),
  ])
  const {
    data,
  }: { data: { hot_review: Hotriview[]; selection_product: Product[] } } =
    await homeResponse.json()

  const { data: article }: { data: Article[] } = await articleResponse.json()

  return { props: { data, article: article.slice(0, 5) } }
}

export default Home

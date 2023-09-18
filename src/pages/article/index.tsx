import Article from '@/component/pages/Article'

export async function getStaticProps() {
  const url = process.env.NEXT_PUBLIC_API_URL
  const [articles, relatedArticles] = await Promise.all([
    fetch(`${url}/article`).then((res) => res.json()),
    fetch(`${url}/article/related`).then((res) => res.json()),
  ])

  return {
    props: {
      articles: articles.data,
      relatedArticles: relatedArticles.data,
    },
    revalidate: 100000,
  }
}

export default Article

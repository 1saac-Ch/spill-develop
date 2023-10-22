import Article from '@/component/pages/Article'
// import articles from '@/constant/article'
// import relatedArticles from '@/constant/article/related'

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
    // revalidate: 100000,
  }
}

export default Article

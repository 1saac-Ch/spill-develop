type ContentReview = {
  url: string
  title_content?: string
  nama_influencer?: string
}

type User = {
  id: string
  name: string
  token: string
}

type Article = {
  id: string
  title: string
  image: string
  description: string
}

type TiktokContent = {
  tiktok_id: string
  product_id: string
  channel_name: string
  tiktok_link: string
  upload_date: Date
}

type Hotriview = {
  id: string
  user_id: string
  product_id: string
  title: string
  image: string
  video: null
  like: number
  rating: string
  description: string
  products: Product[]
}

type Product = {
  id: number
  product_title: string
  description: string
  brand: string
  type: string
  series: string
  price_min: number
  price_max: number
  images: string
  review: number
  rating: number
  min_price: number
  max_price: number
  title_name: string
  disscuss: number
  view_product: number
}

type Reply = {
  id: string
  name: string
  rating: number
  title: string
  description: string
  createdAt: string
  helps: number
}

type Discussion = {
  id: string
  name: string
  description: string
  createdAt: string
  replies: Discussion[]
}

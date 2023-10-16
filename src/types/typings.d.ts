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
  id: number
  article_id: string
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
  userId: string
  productId: string
  title: string
  image: string
  video: null
  like: number
  media: string[]
  rating: string
  description: string
  product: Product[] | null
}

type TempHotReview = {
  id: string
  product: Pick<Product, 'id' | 'images'>
  title: string
  media: string
  likes: number
  rating: string
  description: string
  user: {
    fullname: string
    username: string
    no_hp: string
  }
}

type Product = {
  id: number
  product_id: string
  product_title: string
  brand: string
  type: string
  series: string
  price_min: number
  price_max: number
  images: string
  rating: number
  review_count: number
  description: string
}

type Affiliate = {
  id: string
  affiliate_id: string
  productId: string
  affiliate_link: string
  ecommerce_name: 'Tokopedia' | 'Shopee' | 'Lazada' | 'Bukalapak'
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
  id: number
  userId: string
  user: UserData
  productId: string
  body: string
  parentId: string | null
  createdAt: string
  updatedAt: string
  waktu: string
}

type UserData = {
  fullname: string
  username: string
  email?: string | null
  no_hp: string
}

type Review = {
  id: string
  userId: string
  productId: string
  title: string
  rating: number
  description: string
  media: string
  likes: number
  createdAt: string
  updatedAt: string
  user: UserData
}

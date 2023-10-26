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
  product_title: string
  title: string
  images: string[] | null
  likes: number
  media: string[] | null
  rating: string
  description: string
  user: UserData
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
  id: string
  product_id: string
  product_title: string
  images: string
  description: string
  brand: string
  type: string
  series: string
  price_min: number
  price_max: number
  release_date: string
}

type ProductSearch = Product & {
  review_count: number
  rating: number
  review: Review[]
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
  id: string
  userId: string
  user: UserData
  productId: string
  body: string
  parentId: string | null
  createdAt: string
  updatedAt: string
  waktu: string
  user: UserData
}

type UserData = {
  fullname: string
  username: string
  email?: string | null
  no_hp: string
  profileImage?: string | null
}

type Review = {
  id: string
  userId: string
  productId: string
  title: string
  rating: number
  description: string
  media: string[] | string | null
  likes: number
  createdAt: string
  updatedAt: string
  user: UserData
}

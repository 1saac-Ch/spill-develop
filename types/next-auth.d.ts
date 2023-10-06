import { JWT } from 'next-auth/jwt'

declare module 'next-auth/jwt' {
  interface User {
    token: string
    fullname: string
    username: string
    email?: string | null
    role: string
    id:string
  }
  interface JWT extends User {
    value: string
  }
}

declare module 'next-auth' {
  interface User {
    token: string
    fullname: string
    username: string
    email?: string | null
    role: string
    id: string
  }

  interface Session {
    user: User
    accessToken: string
  }
}

import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        noHP: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials) return null

          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            {
              body: JSON.stringify({
                phone: credentials.noHP,
                password: credentials.password,
              }),
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )

          const { token } = await response.json()

          if (!token) return null

          const resp = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/decoded-token`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )

          const { userData } = await resp.json()
          return {
            id: userData.id,
            fullname: userData.fullname,
            username: userData.username,
            email: userData.email,
            role: userData.role,
            token,
          }
        } catch (error) {
          return null
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    newUser: '/daftar',
  },

  session: {
    maxAge: 1 * 24 * 60 * 30,
  },
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.id = user.id
        token.fullname = user.fullname
        token.username = user.username
        token.email = user.email
        token.role = user.role
        token.value = user.token
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.value
      session.user.fullname = token.fullname
      session.user.username = token.username
      session.user.email = token.email
      session.user.role = token.role
      session.user.id = token.id
      return session
    },
  },
}

export default NextAuth(authOptions)

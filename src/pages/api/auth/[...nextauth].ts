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
      async authorize(credentials, request) {
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
        if (token) {
          return {
            id: `${Date.now()}`,
            token,
          }
        }
        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    newUser: '/daftar',
  },
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.id = user.id
        token.value = user.token
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.value
      return session
    },
  },
}

export default NextAuth(authOptions)

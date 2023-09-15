import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'

const baseURL = process.env.NEXT_PUBLIC_API_URL

export default function useFetcher<T>(url: string, isPrivate = false) {
  const h = new Headers()
  const { data: session } = useSession()

  if (isPrivate && session?.accessToken) {
    h.append('Authorization', session.accessToken)
  }
  h.append('Content-Type', 'application/json')

  const query = useQuery({
    queryKey: [url],
    queryFn: async () => {
      const response = await fetch(`${baseURL}${url}`, {
        headers: h,
      })
      return (await response.json()) as T
    },
  })

  return query
}

import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'

const baseURL = process.env.NEXT_PUBLIC_API_URL

export default function useFetcher<T>(
  url: string,
  isPrivate = false,
  options?: Omit<UseQueryOptions<T, unknown, T, string[]>, 'initialData'> & {
    initialData?: (() => undefined) | undefined
  }
) {
  const h = new Headers()
  const { data: session } = useSession()

  if (isPrivate && session?.accessToken) {
    h.append('Authorization', session.accessToken)
  }
  h.append('Content-Type', 'application/json')

  const urlToQueryKey = url.split('/')
  urlToQueryKey.shift()

  const query = useQuery({
    queryKey: urlToQueryKey,
    queryFn: async () => {
      const response = await fetch(`${baseURL}${url}`, {
        headers: h,
      })
      return (await response.json()) as T
    },

    ...options,
  })

  return query
}

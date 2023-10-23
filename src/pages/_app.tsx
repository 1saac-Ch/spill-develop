import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'
import '../../styles/globals.css'
import { NextPageWithLayout } from '@/utils/NextPageWithLayout'
import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Toaster } from '@/component/ui/Toaster'

import Script from 'next/script'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const queryClient = new QueryClient()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <React.Fragment>
      <Script
        strategy="afterInteractive"
        src={'https://www.googletagmanager.com/gtag/js?id=G-F26XW99WED'}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F26XW99WED', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.3.1/css/all.min.css"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <div className="font-satoshi">
          <SessionProvider session={session}>
            {getLayout(<Component {...pageProps} />)}
          </SessionProvider>
        </div>
      </QueryClientProvider>

      <Toaster />
    </React.Fragment>
  )
}

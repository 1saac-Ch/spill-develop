/* eslint-disable @next/next/no-page-custom-font */
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import '../../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Spill</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet"/>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <NextUIProvider>
            <Component {...pageProps} />
          </NextUIProvider>
        </PersistGate>
      </Provider>
    </React.Fragment> 
  );
}





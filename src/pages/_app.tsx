import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import '../../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import Loader from '@/component/elements/Loader';
import { NextPageWithLayout } from '@/utils/NextPageWithLayout';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <React.Fragment>
      <Head>
        <title>Spill</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={<Loader/>} persistor={persistor} >
          <NextUIProvider>
          {getLayout(<Component {...pageProps} />)}
          </NextUIProvider>
        </PersistGate>
      </Provider>
    </React.Fragment> 
  );
}





import React, {useEffect, useState} from 'react';
import App from 'next/app';
import Head from 'next/head';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import Header from '../components/Header';
import '../styles/index.css';

import Providers from './providers';
import {styletron} from '../styletron';

export default function MyApp({Component, pageProps}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <Providers>
      <Head>
        <title>Floor Report</title>
        <meta
          name="description"
          content="Floor Report: NFT prices & analytics"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Coustard:wght@400;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </Providers>
  );

  if (!mounted) {
    <div style={{visibility: 'hidden'}}>{body}</div>;
  }

  return <StyletronProvider value={styletron}>{body}</StyletronProvider>;
}

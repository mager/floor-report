import React, {useEffect, useState} from 'react';
import App from 'next/app';
import Head from 'next/head';
import {Provider as StyletronProvider} from 'styletron-react';

import {Block} from 'baseui/block';
import {LightTheme, BaseProvider} from 'baseui';

import Body from '../components/Body';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Coustard:wght@400;900&family=Titillium+Web:wght@300;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Body>
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </Body>
    </Providers>
  );

  if (!mounted) {
    <div style={{visibility: 'hidden'}}>{body}</div>;
  }

  return <StyletronProvider value={styletron}>{body}</StyletronProvider>;
}

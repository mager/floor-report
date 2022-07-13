import React, {useEffect, useState} from 'react';
import {Provider as StyletronProvider} from 'styletron-react';
import Head from 'next/head';

import Body from '../components/Body';
import Footer from '../components/Footer';
import HeaderV2 from '../components/HeaderV2';
import Main from '../components/Main';
import '../styles/index.css';

import Providers from './providers';
import {styletron} from '../styletron';

export default function FloorReport({Component, pageProps}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <Providers>
      <Head>
        <meta
          name="description"
          content="Floor Report: NFT prices & analytics"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Body>
        <HeaderV2 />
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

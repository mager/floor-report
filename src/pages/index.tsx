import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Floor Report</title>
        <meta
          name="description"
          content="Floor Report: NFT prices & analytics"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Floor Report</h1>
        <p>Floor Report: NFT floor prices & analytics</p>
      </main>

      <footer>
        <p>by @mager</p>
      </footer>
    </div>
  );
};

export default Home;

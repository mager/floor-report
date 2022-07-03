import React from 'react';
import type {NextPage} from 'next';
import useSWR from 'swr';

import {useStyletron} from 'baseui';

import Container from '../components/Container';
import H1 from '../components/H1';
import Loading from '../components/Loading';
import RandomNFT from '../components/RandomNFT';
import Stats from '../components/Stats';
import Text from '../components/Text';
import {fetcher, swrOptions} from '../utils';

const Home: NextPage = () => {
  const [css, _] = useStyletron();
  const {data, error} = useSWR('/api/home', fetcher, swrOptions);

  if (error) {
    console.error(error);
  }

  if (!data) {
    return <Loading />;
  }

  const {randomNFT, stats} = data;

  return (
    <Container>
      <H1>Floor Report</H1>
      <Text
        className={css({
          fontStyle: 'italic',
          marginTop: 0,
        })}
      >
        NFT floor prices & analytics
      </Text>
      <Stats stats={stats} />
      <RandomNFT nft={randomNFT} />
    </Container>
  );
};

export default Home;

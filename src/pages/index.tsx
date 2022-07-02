import React from 'react';
import type {NextPage} from 'next';
import useSWR from 'swr';

import {Block} from 'baseui/block';
import {Spinner} from 'baseui/spinner';

import Container from '../components/Container';
import H1 from '../components/H1';
import Loading from '../components/Loading';
import Stats from '../components/Stats';
import Text from '../components/Text';
import {fetcher, swrOptions} from '../utils';

const Home: NextPage = () => {
  const {data, error} = useSWR('/api/stats', fetcher, swrOptions);

  if (error) {
    console.error(error);
  }

  if (!data) {
    return <Loading />;
  }

  const {total, updated} = data;

  return (
    <Container>
      <H1>Floor Report</H1>
      <Text>Floor Report: NFT floor prices & analytics</Text>
      <Stats total={total} updated={updated} />
    </Container>
  );
};

export default Home;

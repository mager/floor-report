import React from 'react';
import type {NextPage} from 'next';
import {HeadingXXLarge} from 'baseui/typography';

import Container from '../components/Container';
import Text from '../components/Text';

const Home: NextPage = () => {
  return (
    <Container>
      <HeadingXXLarge>Floor Report</HeadingXXLarge>
      <Text>Floor Report: NFT floor prices & analytics</Text>
    </Container>
  );
};

export default Home;

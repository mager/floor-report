import React from 'react';
import type {NextPage} from 'next';
import {styled} from 'baseui';
import Image from 'next/image';
import {Block} from 'baseui/block';
import {HeadingXXLarge} from 'baseui/typography';

import Container from '../components/Container';
import Text from '../components/Text';

const Footer = styled('footer', ({$theme}) => ({
  margin: `${$theme.sizing.scale400} 0 0`,
  padding: `0 ${$theme.sizing.scale800}`,
}));

const Home: NextPage = () => {
  return (
    <Container>
      <HeadingXXLarge>Floor Report</HeadingXXLarge>
      <Text>Floor Report: NFT floor prices & analytics</Text>
      <footer>
        <Text>by @mager</Text>
      </footer>
    </Container>
  );
};

export default Home;

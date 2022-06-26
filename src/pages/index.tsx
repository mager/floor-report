import type {NextPage} from 'next';
import {styled} from 'baseui';
import Image from 'next/image';
import {Block} from 'baseui/block';

import Container from '../components/Container';

const Footer = styled('footer', ({$theme}) => ({
  margin: `${$theme.sizing.scale400} 0 0`,
  padding: `0 ${$theme.sizing.scale800}`,
}));

const Home: NextPage = () => {
  return (
    <Container>
      <h1>Floor Report</h1>
      <p>Floor Report: NFT floor prices & analytics</p>

      <footer>
        <p>by @mager</p>
      </footer>
    </Container>
  );
};

export default Home;

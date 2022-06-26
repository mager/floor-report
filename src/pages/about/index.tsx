import type {NextPage} from 'next';
import {styled} from 'baseui';
import Head from 'next/head';
import Image from 'next/image';
import {Block} from 'baseui/block';

import Header from '../../components/Header';

const Container = styled(Block, ({$theme}) => ({
  margin: `${$theme.sizing.scale400} 0 0`,
  padding: `0 ${$theme.sizing.scale800}`,
}));

const About: NextPage = () => {
  return (
    <Container>
      <h1>About</h1>
      <p>
        Floor Report is a project by @mager to learn about web3. Consider
        everything experimental.
      </p>
    </Container>
  );
};

export default About;

import React from 'react';
import type {NextPage} from 'next';
import {styled} from 'baseui';
import Head from 'next/head';
import Image from 'next/image';
import {Block} from 'baseui/block';
import {HeadingXXLarge} from 'baseui/typography';

import Container from '../../components/Container';
import Header from '../../components/Header';
import Text from '../../components/Text';

const About: NextPage = () => {
  return (
    <Container>
      <HeadingXXLarge>About</HeadingXXLarge>
      <Text>
        Floor Report is a project by @mager to learn about web3. Consider
        everything experimental.
      </Text>
    </Container>
  );
};

export default About;

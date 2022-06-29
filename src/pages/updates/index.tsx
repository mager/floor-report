import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';

import {styled} from 'baseui';
import {Block} from 'baseui/block';
import {HeadingMedium, HeadingXXLarge} from 'baseui/typography';

import Container from '../../components/Container';
import Header from '../../components/Header';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import Text from '../../components/Text';

const About: NextPage = () => {
  return (
    <Container>
      <HeadingXXLarge>Updates</HeadingXXLarge>
      <Text>Just a list of updates...</Text>
      <Block>
        <HeadingMedium>2022-06-27</HeadingMedium>
        <List>
          <ListItem>
            <Text>
              Use <a href="https://baseweb.design/">Baseweb</a>
            </Text>
          </ListItem>
          <ListItem>
            <Text>Create React App with Typescript</Text>
          </ListItem>
        </List>
      </Block>
    </Container>
  );
};

export default About;

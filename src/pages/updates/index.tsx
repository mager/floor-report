import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';

import {styled} from 'baseui';
import {Block} from 'baseui/block';
import {StyledLink} from 'baseui/link';
import {HeadingMedium} from 'baseui/typography';

import Container from '../../components/Container';
import H1 from '../../components/H1';
import Header from '../../components/Header';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import Text from '../../components/Text';

const About: NextPage = () => {
  return (
    <Container>
      <H1>Updates</H1>
      <Text>Just a list of updates...</Text>
      <Block>
        <HeadingMedium>Week of 2022-06-27</HeadingMedium>
        <List>
          <ListItem>
            <Text>Dark mode</Text>
          </ListItem>
          <ListItem>
            <Text>Sorted out the footer</Text>
          </ListItem>
          <ListItem>
            <Text>
              Use{' '}
              <StyledLink href="https://baseweb.design/">Baseweb</StyledLink>
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

import React from 'react';
import type {NextPage} from 'next';

import {Block} from 'baseui/block';
import {StyledLink} from 'baseui/link';
import {HeadingMedium} from 'baseui/typography';

import Container from '../../components/Container';
import H1 from '../../components/H1';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import Text from '../../components/Text';

const About: NextPage = () => {
  return (
    <Container>
      <H1>Updates</H1>
      <Text>Just a list of updates...</Text>
      <Block>
        <HeadingMedium>Week of 2022-07-04</HeadingMedium>
        <List>
          <ListItem>
            <Text>Search box</Text>
          </ListItem>
          <ListItem>
            <Text>Collection page</Text>
          </ListItem>
        </List>
      </Block>
      <Block>
        <HeadingMedium>Week of 2022-06-27</HeadingMedium>
        <List>
          <ListItem>
            <Text>Refactor stats & random NFT to be in sweeper service</Text>
          </ListItem>
          <ListItem>
            <Text>Random NFT on the homepage</Text>
          </ListItem>
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

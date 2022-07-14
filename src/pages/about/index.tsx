import React from 'react';

import {styled} from 'baseui';
import {Block} from 'baseui/block';
import {HeadingXXLarge} from 'baseui/typography';

import Container from '../../components/Container';
import Text from '../../components/Text';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import H5 from '../../components/H5';

const StyledBlock = styled(Block, ({$theme}) => ({
  margin: `${$theme.sizing.scale800} 0`,
}));

const About = () => {
  return (
    <Container>
      <HeadingXXLarge>About</HeadingXXLarge>
      <StyledBlock>
        <Text>
          Floor Report is a project by @mager to learn about web3. Consider
          everything experimental.
        </Text>
      </StyledBlock>
      <StyledBlock>
        <H5>Tech Stack</H5>
        <List>
          <ListItem>Backend: Go backend hosted on Cloud Run</ListItem>
          <ListItem>Frontend: React & Next.js </ListItem>
          <ListItem>Database: Firestore</ListItem>
          <ListItem>Analytics: BigQuery</ListItem>
          <ListItem>Authentication: Web3Modal</ListItem>
          <ListItem>
            APIs: Infura for ENS resolution, OpenSea for NFT data, Coinstats for
            the price of ETH.{' '}
          </ListItem>
          <ListItem>Design: Figma, Google Fonts </ListItem>
        </List>
      </StyledBlock>
    </Container>
  );
};

export default About;

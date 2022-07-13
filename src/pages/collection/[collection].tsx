import React from 'react';
import Marquee from 'react-fast-marquee';
import TimeAgo from 'react-timeago';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';
import {FlexGridItem} from 'baseui/flex-grid';

import Container from '../../components/Container';
import Error from '../../components/Error';
import FlexGrid from '../../components/FlexGrid';
import H1 from '../../components/H1';
import H4 from '../../components/H4';
import Loading from '../../components/Loading';
import Image from '../../components/Image';
import CollectionStatsMarquee from '../../components/StatsMarquee';
import Text from '../../components/Text';
import {CollectionT} from '../../types';
import {API_PATH} from '../../utils';

const InfoGrid = styled(Block, () => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: 0,
}));

const Floor = styled('span', ({$theme}) => ({
  fontWeight: 600,
  fontStyle: 'italic',
  fontFamily: 'Spline Sans Mono',
  fontSize: $theme.sizing.scale1200,
  color: $theme.colors.contentPositive,
  margin: 0,
  [$theme.mediaQuery.medium]: {
    fontSize: $theme.sizing.scale1200,
  },
  [$theme.mediaQuery.small]: {
    fontSize: $theme.sizing.scale800,
  },
}));

const ResponsiveImage = styled('img', ({$theme}) => ({
  [$theme.mediaQuery.medium]: {
    width: '128px',
    height: '128px',
  },
  [$theme.mediaQuery.small]: {
    width: '64px',
    height: '64px',
  },
}));

const TopNFTsGrid = styled(FlexGrid, () => ({}));

type Props = {
  collection: CollectionT;
  success: boolean;
};

const Collection = ({collection, success}: Props) => {
  const [_, theme] = useStyletron();
  if (!success) {
    return <Error message="Failed to fetch collection" />;
  }

  if (!collection) {
    return <Loading />;
  }

  const numOwners = collection.collection.num;
  const totalSupply = collection.collection.supply;
  const topNFTs = collection.collection.topNFTs;

  return (
    <Container>
      <InfoGrid>
        <Block display="flex">
          <Block marginRight={theme.sizing.scale400}>
            <ResponsiveImage src={collection.thumb} alt={collection.name} />
          </Block>
          <Block paddingRight={theme.sizing.scale800}>
            <H1>{collection.name}</H1>
            <Text margin={0}>
              <a
                href={`https://opensea.io/collection/${collection.slug}`}
                target="_blank"
                rel="noreferrer"
              >{`opensea.io/${collection.slug}`}</a>
            </Text>
            {numOwners && totalSupply && (
              <Text margin={0}>
                <strong>{numOwners}</strong> owners,{' '}
                <strong>{totalSupply}</strong> tokens
              </Text>
            )}
            <Text margin={0}>
              Updated <TimeAgo date={collection.updated} />
            </Text>
          </Block>
        </Block>
        <Block>
          <Floor>{collection.floor}ETH</Floor>
        </Block>
      </InfoGrid>
      <Marquee speed={60} gradient={false}>
        <CollectionStatsMarquee collection={collection} />
      </Marquee>
      {topNFTs && topNFTs.length > 0 && (
        <Block>
          <H4 marginBottom={theme.sizing.scale800}>Popular tokens</H4>
          <TopNFTsGrid>
            {topNFTs.map((nft) => (
              <FlexGridItem key={nft.name}>
                <Image name={nft.name} size="100%" src={nft.image} />
                <Text>{nft.name}</Text>
              </FlexGridItem>
            ))}
          </TopNFTsGrid>
        </Block>
      )}
    </Container>
  );
};

export async function getServerSideProps(context) {
  const url = `${API_PATH}/collection/${context.query.collection}`;
  const res = await fetch(url);
  if (res.status !== 200) {
    return {
      props: {
        success: false,
      },
    };
  }

  const collection = await res.json();

  return {
    props: {
      success: true,
      collection,
    },
  };
}

export default Collection;

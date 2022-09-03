import * as React from 'react';
import Marquee from 'react-fast-marquee';
import TimeAgo from 'react-timeago';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';
import {StyledLink} from 'baseui/link';

import AttributeFloors from '../../components/AttributeFloors';
import Container from '../../components/Container';
import Error from '../../components/Error';
import FlexGrid, {FlexItem} from '../../components/FlexGrid';
import FloorPriceLarge from '../../components/FloorPriceLarge';
import H1 from '../../components/H1';
import H4 from '../../components/H4';
import Image from '../../components/Image';
import Loading from '../../components/Loading';
import ResponsiveImage from '../../components/ResponsiveImage';
import StatsMarquee from '../../components/StatsMarqueeV2';
import Text from '../../components/Text';
import {CollectionT} from '../../types';
import {API_PATH} from '../../utils';

const InfoGrid = styled(Block, ({$theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: `${$theme.sizing.scale400} 0`,
}));

const InfoContainer = styled(Block, () => ({
  display: 'flex',
}));

const FloorInfo = styled(Block, ({$theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

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
  const attributes = collection.collection.attributes;

  const hasTopNFTs = topNFTs && topNFTs.length > 0;
  const hasAttributes = attributes && attributes.length > 0;

  return (
    <Container>
      <InfoGrid>
        <InfoContainer>
          <Block marginRight={theme.sizing.scale400}>
            <ResponsiveImage src={collection.thumb} alt={collection.name} />
          </Block>
          <Block paddingRight={theme.sizing.scale800}>
            <H1>{collection.name}</H1>
            <Text margin={0}>
              <StyledLink
                href={`https://opensea.io/collection/${collection.slug}`}
              >{`opensea.io/${collection.slug}`}</StyledLink>
            </Text>
          </Block>
        </InfoContainer>
      </InfoGrid>
      <FloorInfo>
        <Block>
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
        <Block>
          <FloorPriceLarge>{collection.floor}</FloorPriceLarge>
        </Block>
      </FloorInfo>

      <StatsMarquee collection={collection} />
      {!hasAttributes && hasTopNFTs && (
        <Block>
          <H4 marginBottom={theme.sizing.scale800}>Popular tokens</H4>
          <FlexGrid columns={[2, 4, 6, 6]}>
            {topNFTs.map((nft) => (
              <FlexItem key={nft.name}>
                <Image name={nft.name} size="100%" src={nft.image} />
                <Text>{nft.name}</Text>
              </FlexItem>
            ))}
          </FlexGrid>
        </Block>
      )}
      {hasAttributes && (
        <AttributeFloors slug={collection.slug} attributes={attributes} />
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

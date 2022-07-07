import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import TimeAgo from 'react-timeago';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';

import {API_PATH} from '../../utils';
import Container from '../../components/Container';
import Error from '../../components/Error';
import H1 from '../../components/H1';
import CollectionStatsMarquee from '../../components/StatsMarquee';
import Loading from '../../components/Loading';
import Text from '../../components/Text';

const Grid = styled(Block, () => ({
  display: 'flex',
  margin: 0,
}));

const Collection = ({collection, success}) => {
  const [_, theme] = useStyletron();
  if (!success) {
    return <Error message="Failed to fetch collection" />;
  }

  if (!collection) {
    return <Loading />;
  }

  const numOwners = collection.collection.num;
  const totalSupply = collection.collection.supply;

  return (
    <Container>
      <Grid>
        <Block marginRight={theme.sizing.scale400}>
          <Image width="128" height="128" src={collection.thumb} />
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
      </Grid>
      <Marquee speed={60} gradientWidth={60}>
        <CollectionStatsMarquee collection={collection} />
      </Marquee>
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

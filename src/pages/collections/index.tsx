import * as React from 'react';

import {styled, useStyletron} from 'baseui';

import {API_PATH} from '../../utils';
import Container from '../../components/Container';
import CollectionRow from '../../components/CollectionRow';
import Error from '../../components/Error';
import FlexGrid, {FlexItem} from '../../components/FlexGrid';
import H1 from '../../components/H1';
import H4 from '../../components/H4';
import Loading from '../../components/Loading';
import {CollectionRowT, CollectionsT} from '../../types';

type Props = {
  collections: CollectionsT;
  success: boolean;
};

const Collections = ({collections, success}: Props) => {
  const [_, theme] = useStyletron();

  if (!success) {
    return <Error message="Failed to fetch collections" />;
  }

  if (!collections) {
    return <Loading />;
  }

  const highestFloor = collections.trending.topHighestFloor;
  const topWeeklyVolume = collections.trending.topWeeklyVolume;
  const hasData = highestFloor && topWeeklyVolume;

  return (
    <Container>
      <H1 marginBottom={theme.sizing.scale800}>Collections</H1>
      {hasData && (
        <FlexGrid columns={[1, 1, 2, 2]}>
          <FlexItem>
            <H4 marginBottom={theme.sizing.scale800}>Highest Floor</H4>
            {highestFloor &&
              highestFloor.length > 0 &&
              highestFloor.map((collection: CollectionRowT, i: number) => (
                <CollectionRow
                  key={i}
                  rank={i + 1}
                  collection={collection}
                  value={collection.floor}
                />
              ))}
          </FlexItem>
          <FlexItem>
            <H4 marginBottom={theme.sizing.scale800}>Top Weekly Volume</H4>
            {topWeeklyVolume &&
              topWeeklyVolume.length > 0 &&
              topWeeklyVolume.map((collection: CollectionRowT, i: number) => (
                <CollectionRow
                  showFloor
                  key={i}
                  rank={i + 1}
                  collection={collection}
                  value={collection['7d']}
                />
              ))}
          </FlexItem>
        </FlexGrid>
      )}
    </Container>
  );
};

export async function getServerSideProps() {
  const url = `${API_PATH}/collections`;
  const res = await fetch(url);
  if (res.status !== 200) {
    return {
      props: {
        success: false,
      },
    };
  }

  const collections = await res.json();

  return {
    props: {
      success: true,
      collections,
    },
  };
}

export default Collections;

import React from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';

import {Routes} from '../../constants';
import FloorPrice from '../../components/FloorPrice';
import Text from '../../components/Text';
import {CollectionRowT} from '../../types';

type Props = {
  collection: CollectionRowT;
  rank?: number;
  showFloor?: boolean;
  value?: number;
};

const Container = styled(Block, ({$theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: $theme.sizing.scale800,
  cursor: 'pointer',
}));

const Inner = styled(Block, () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const CollectionRow = (props: Props): JSX.Element => {
  const {collection, showFloor, value} = props;
  const [_, theme] = useStyletron();
  const router = useRouter();

  return (
    <Container
      onClick={() => {
        router.push(Routes.COLLECTION(collection.slug));
      }}
    >
      <Inner>
        <Block marginRight={theme.sizing.scale400}>
          <Image src={collection.thumb} width="64" height="64" />
        </Block>
        <Text margin={0}>
          {showFloor
            ? `${collection.name} (${collection.floor}Ξ)`
            : collection.name}
        </Text>
      </Inner>
      {value && <FloorPrice>{value}</FloorPrice>}
    </Container>
  );
};

export default CollectionRow;

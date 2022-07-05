import React from 'react';
import Image from 'next/image';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';
import {StyledLink} from 'baseui/link';

import Text from '../../components/Text';
import {CollectionT} from '../../types';
import {Routes} from '../../constants';

const Container = styled(Block, () => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const CollectionContainer = styled(Block, () => ({
  display: 'flex',
  width: '90%',
}));

const FloorContainer = styled(Block, () => ({
  display: 'flex',
  width: '10%',
  justifyContent: 'flex-end',
}));

type Props = {
  collection: CollectionT;
};

const Quantity = styled('em', ({$theme}) => ({
  marginLeft: $theme.sizing.scale200,
}));

const Collection = ({collection}: Props) => {
  const [_, theme] = useStyletron();
  return (
    <Container>
      <CollectionContainer>
        {collection.thumb && (
          <Block marginRight={theme.sizing.scale400}>
            <Image
              alt={collection.name}
              src={collection.thumb}
              width="64"
              height="64"
            />
          </Block>
        )}
        <Text>
          <StyledLink href={Routes.COLLECTION(collection.slug)}>
            {collection.name}
          </StyledLink>
          <Quantity>x{collection.numOwned}</Quantity>
        </Text>
      </CollectionContainer>
      <FloorContainer>
        <Text>{collection.floor} ETH</Text>
      </FloorContainer>
    </Container>
  );
};
export default Collection;

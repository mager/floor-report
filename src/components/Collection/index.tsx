import React from 'react';
import Image from 'next/image';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';
import {StyledLink} from 'baseui/link';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';

import Text from '../../components/Text';
import {CollectionT} from '../../types';
import {Routes} from '../../constants';

const Container = styled(Block, () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const ImageContainer = styled(Block, ({$theme}) => ({
  width: '64px',
  flex: '0 0 64px',
  marginRight: $theme.sizing.scale400,
}));

const CollectionContainer = styled(Block, () => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
}));

const FloorContainer = styled(Block, () => ({
  width: '72px',
  flex: '0 0 72px',
  textAlign: 'right',
}));

type Props = {
  collection: CollectionT;
};

const Quantity = styled(Block, ({$theme}) => ({
  marginLeft: $theme.sizing.scale200,
  fontFamily: 'Spline Sans Mono',
  fontStyle: 'italic',
}));

const itemProps = {
  backgroundColor: 'mono300',
  height: 'scale1000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Collection = ({collection}: Props) => {
  const [_, theme] = useStyletron();
  return (
    <Container>
      {collection.thumb && (
        <ImageContainer>
          <Image
            alt={collection.name}
            src={collection.thumb}
            width="64"
            height="64"
          />
        </ImageContainer>
      )}
      <CollectionContainer>
        <StyledLink href={Routes.COLLECTION(collection.slug)}>
          {collection.name}
        </StyledLink>
        <Quantity>x{collection.numOwned}</Quantity>
      </CollectionContainer>
      <FloorContainer>
        <Text margin={0}>{collection.floor}Ξ</Text>
      </FloorContainer>
    </Container>
  );
};
export default Collection;

import React from 'react';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';
import {StyledLink} from 'baseui/link';

import {CollectionT} from '../../types';
import {Routes} from '../../constants';
import FloorPriceSmall from '../../components/FloorPriceSmall';
import Image from '../../components/Image';

const Container = styled(Block, ({$theme}) => ({
  marginBottom: $theme.sizing.scale400,
  paddingBottom: $theme.sizing.scale400,
  borderBottom: `1px solid ${$theme.colors.borderOpaque}`,
}));

const CollectionContainer = styled(Block, ({$theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const Name = styled(Block, () => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
}));

const FloorContainer = styled(Block, () => ({
  width: '72px',
  flex: '0 0 72px',
  textAlign: 'right',
}));

const Thumb = styled(Block, ({$theme}) => ({
  position: 'relative',
  marginRight: $theme.sizing.scale200,
}));

type Props = {
  collection: CollectionT;
};

const Quantity = styled(Block, ({$theme}) => ({
  fontFamily: 'Spline Sans Mono',
  fontStyle: 'italic',
  fontSize: $theme.sizing.scale500,
  fontWeight: 300,
  borderRadius: $theme.borders.radius500,
  background: $theme.colors.backgroundTertiary,
  padding: $theme.sizing.scale100,
  position: 'absolute',
  top: `-${$theme.sizing.scale200}`,
  right: `-${$theme.sizing.scale200}`,
}));

// const NFTs = styled(Block, ({$theme}) => ({
//   display: 'flex',
//   flexWrap: 'wrap',
// }));

// const NFT = styled(Block, ({$theme}) => ({
//   marginRight: $theme.sizing.scale400,
// }));

const Collection = ({collection}: Props) => {
  const [_, theme] = useStyletron();
  return (
    <Container>
      <CollectionContainer>
        {collection.thumb && (
          <Thumb>
            <Image name={collection.name} src={collection.thumb} size="64px" />
            {collection.numOwned > 1 && (
              <Quantity>x{collection.numOwned}</Quantity>
            )}
          </Thumb>
        )}
        <Name>
          <StyledLink href={Routes.COLLECTION(collection.slug)}>
            {collection.name}
          </StyledLink>
        </Name>
        <FloorContainer>
          <FloorPriceSmall>{collection.floor}</FloorPriceSmall>
        </FloorContainer>
      </CollectionContainer>
      {/* <NFTs>
        {collection.nfts.map((nft) => (
          <Block key={nft.imageUrl}>
            <NFT>
              <Image size="32px" src={nft.imageUrl} name={nft.name} />
            </NFT>
          </Block>
        ))}
      </NFTs> */}
    </Container>
  );
};
export default Collection;

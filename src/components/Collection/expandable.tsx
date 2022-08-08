import * as React from 'react';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';
import {StyledLink} from 'baseui/link';
import {Accordion, Panel} from 'baseui/accordion';

import {Routes} from '../../constants';
import FloorPriceSmall from '../../components/FloorPriceSmall';
import Image from '../../components/Image';
import NFT from '../../components/NFT';
import Quantity from '../../components/Quantity';
import {CollectionT} from '../../types';

const Container = styled(Block, ({$theme}) => ({
  marginBottom: $theme.sizing.scale400,
  paddingBottom: $theme.sizing.scale400,
}));

const CollectionContainer = styled(Block, () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
}));

const Details = styled(Block, () => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
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

const NFTs = styled(Block, () => ({
  display: 'flex',
  flexDirection: 'column',
}));

const ExpandableCollection = ({collection}: Props) => {
  const [_, theme] = useStyletron();
  return (
    <Container>
      <Accordion accordion>
        <Panel
          overrides={{
            Header: {
              style: {
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: theme.sizing.scale400,
                paddingBottom: theme.sizing.scale400,
              },
            },
            ToggleIcon: {
              style: {
                display: 'none',
              },
            },
            Content: {
              style: {
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: theme.sizing.scale400,
                paddingBottom: theme.sizing.scale400,
                backgroundColor: theme.colors.backgroundPrimary,
              },
            },
          }}
          title={
            <CollectionContainer>
              {collection.thumb && (
                <Block>
                  <Thumb>
                    <Image
                      name={collection.name}
                      src={collection.thumb}
                      size="64px"
                    />
                    {collection.numOwned > 1 && (
                      <Quantity>x{collection.numOwned}</Quantity>
                    )}
                  </Thumb>
                </Block>
              )}
              <Details>
                <Name>
                  <StyledLink href={Routes.COLLECTION(collection.slug)}>
                    {collection.name}
                  </StyledLink>
                </Name>
                <FloorContainer>
                  <FloorPriceSmall>{collection.floor}</FloorPriceSmall>
                </FloorContainer>
              </Details>
            </CollectionContainer>
          }
        >
          <NFTs>
            {collection.nfts.map((nft) => (
              <NFT key={`${nft.name}-${nft.tokenId}`} nft={nft} />
            ))}
          </NFTs>
        </Panel>
      </Accordion>
    </Container>
  );
};
export default ExpandableCollection;

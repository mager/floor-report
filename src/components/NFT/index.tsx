import * as React from 'react';

import {styled} from 'baseui';
import {Block} from 'baseui/block';

import Image from '../../components/Image';
import {NFTT} from '../../types';

type Props = {
  nft: NFTT;
};

const Component = styled(Block, ({$theme}) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  marginBottom: $theme.sizing.scale200,
}));

const Details = styled(Block, ({$theme}) => ({
  width: '100%',
  display: 'flex',
  marginLeft: $theme.sizing.scale200,
  justifyContent: 'space-between',
}));

const NFT = ({nft}: Props) => {
  const displayName = nft.name || nft.tokenId;
  return (
    <Component key={nft.tokenId}>
      <Image size="32px" src={nft.imageUrl} name={nft.name} />
      <Details>
        <Block>{displayName}</Block>
        <Block>...</Block>
      </Details>
    </Component>
  );
};

export default NFT;

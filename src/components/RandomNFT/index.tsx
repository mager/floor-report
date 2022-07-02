import React from 'react';
import TimeAgo from 'react-timeago';

import {styled} from 'baseui';
import {Block} from 'baseui/block';
import {ParagraphMedium} from 'baseui/typography';

import H5 from '../H5';
import H6 from '../H6';
import Text from '../Text';

type Props = {
  nft: RandomNFT;
};

type RandomNFT = {
  collection: string;
  imageUrl: string;
  name: string;
  owner: string;
};

const RandomNFT = ({nft}: Props) => {
  return (
    <Block>
      <Block padding="20px 0">
        <img src={nft.imageUrl} width="100%" />
      </Block>
      <H5 margin={0}>{nft.collection}</H5>
      <H6 margin={0}>{nft.name}</H6>
      <Text margin={0}>Owned by {nft.owner}</Text>
    </Block>
  );
};

export default RandomNFT;

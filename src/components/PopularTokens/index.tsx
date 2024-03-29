import * as React from 'react';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';

import FlexGrid, {FlexItem} from '../../components/FlexGrid';
import H4 from '../../components/H4';
import Image from '../../components/Image';
import Text from '../../components/Text';
import type {TopNFTT} from '../../types';

type Props = {
  topNFTs: TopNFTT[];
};

const PopularTokens = ({topNFTs}: Props) => {
  const [_, theme] = useStyletron();
  return (
    <Block>
      <H4 marginBottom={theme.sizing.scale800}>Popular Tokens</H4>
      <FlexGrid>
        {topNFTs.map((nft) => (
          <FlexItem key={nft.name}>
            <Image name={nft.name} size="100%" src={nft.image} />
            <Text>{nft.name}</Text>
          </FlexItem>
        ))}
      </FlexGrid>
    </Block>
  );
};
export default PopularTokens;

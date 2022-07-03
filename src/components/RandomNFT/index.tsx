import React from 'react';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';

import H5 from '../H5';
import H6 from '../H6';

type Props = {
  nft: RandomNFT;
};

type RandomNFT = {
  collection: string;
  imageUrl: string;
  name: string;
  owner: string;
};

const Container = styled(Block, ({$theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: `${$theme.sizing.scale1600} 0 0`,
}));

const Image = styled('img', ({$theme}) => ({
  width: '100%',
  [$theme.mediaQuery.medium]: {
    width: '50%',
  },
}));

const RandomNFT = ({nft}: Props) => {
  const [css, theme] = useStyletron();
  const {collection, imageUrl, name, owner} = nft;

  return (
    <Block>
      <Container>
        <Image src={imageUrl} />
        <H5>
          {collection} - {name}
        </H5>
        <H6>Owned by {owner}</H6>
      </Container>
    </Block>
  );
};

export default RandomNFT;

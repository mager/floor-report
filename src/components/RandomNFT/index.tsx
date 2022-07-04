import React from 'react';
import Link from 'next/link';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';

import {Routes} from '../../constants';
import H5 from '../H5';
import H6 from '../H6';

type Props = {
  nft: RandomNFT;
};

type RandomNFT = {
  collectionName: string;
  collectionSlug: string;
  imageUrl: string;
  name: string;
  owner: string;
};

const Container = styled(Block, ({$theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: `${$theme.sizing.scale800} 0`,
}));

const Image = styled('img', ({$theme}) => ({
  width: '100%',
  padding: `0 0 ${$theme.sizing.scale400}`,
  [$theme.mediaQuery.medium]: {
    width: '50%',
  },
}));

const RandomNFT = ({nft}: Props) => {
  const {collectionName, collectionSlug, imageUrl, name, owner} = nft;

  return (
    <Block>
      <Container>
        <Image src={imageUrl} />
        <H5>
          <Link href={Routes.COLLECTION(collectionSlug)}>{collectionName}</Link>
        </H5>
        <H6>Owned by {owner}</H6>
      </Container>
    </Block>
  );
};

export default RandomNFT;

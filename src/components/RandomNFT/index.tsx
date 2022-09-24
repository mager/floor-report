import * as React from 'react';

import {styled} from 'baseui';
import {Block} from 'baseui/block';
import {StyledLink} from 'baseui/link';

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
  ownerName?: string;
};

const Container = styled(Block, ({$theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: `${$theme.sizing.scale800} 0`,
}));

const Image = styled('img', ({$theme}) => ({
  border: `1px solid ${$theme.colors.border}`,
  width: '100%',
  margin: `0 0 ${$theme.sizing.scale400}`,
  [$theme.mediaQuery.medium]: {
    width: '50%',
  },
}));

const RandomNFT = ({nft}: Props) => {
  const {collectionName, collectionSlug, imageUrl, name, owner, ownerName} =
    nft;
  const displayName = `${collectionName} - ${name}`;
  return (
    <Block>
      <Container>
        <Image src={imageUrl} />
        <H5>
          <StyledLink href={Routes.COLLECTION(collectionSlug)}>
            {displayName}
          </StyledLink>
        </H5>
        <H6>
          Owned by{' '}
          <StyledLink href={Routes.ADDRESS(owner)}>
            {ownerName || owner}
          </StyledLink>
        </H6>
      </Container>
    </Block>
  );
};

export default RandomNFT;

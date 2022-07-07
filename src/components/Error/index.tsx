import React from 'react';
import Image from 'next/image';

import {styled} from 'baseui';
import {Block} from 'baseui/block';

import Container from '../Container';
import H4 from '../H4';

type Props = {
  message: string;
};

const CenteredBlock = styled(Block, () => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

const Error = (props: Props): JSX.Element => {
  return (
    <Container>
      <CenteredBlock>
        <H4>{props.message}</H4>
        <Image src="/opensea-throttle.jpg" width="400" height="400" />
      </CenteredBlock>
    </Container>
  );
};

export default Error;

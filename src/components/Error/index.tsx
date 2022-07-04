import React from 'react';
import Image from 'next/image';

import {Block} from 'baseui/block';

import Text from '../Text';

type Props = {
  message: string;
};

const Error = (props: Props): JSX.Element => {
  return (
    <Block>
      <Image src="/opensea-throttle.jpg" width="400" height="400" />
      <Text>{props.message}</Text>
    </Block>
  );
};

export default Error;

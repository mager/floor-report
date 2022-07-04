import React from 'react';

import {useStyletron} from 'baseui';
import {Block} from 'baseui/block';

import Text from '../Text';
import {CollectionT} from '../../types';

type Props = {
  collection: CollectionT;
};

const CollectionStatsMarquee = (props: Props) => {
  const {
    collection: {collection},
  } = props;
  const [_, theme] = useStyletron();

  let s: string = ' ';
  const sep: string = 'Ξ · ';

  if (collection['1d']) {
    s += '24 hour volume: ';
    s += collection['1d'];
    s += sep;
  }

  if (collection['7d']) {
    s += 'Weekly volume: ';
    s += collection['7d'];
    s += sep;
  }

  if (collection['30d']) {
    s += 'Monthly volume: ';
    s += collection['1d'];
    s += sep;
  }

  if (collection.cap) {
    s += 'Market cap: ';
    s += collection.cap;
    s += sep;
  }

  if (collection.sales) {
    s += 'Total sales: ';
    s += collection.sales;
    s += sep;
  }

  s += ' ';

  return (
    <Block margin="30px">
      <Text>{s}</Text>
    </Block>
  );
};

export default CollectionStatsMarquee;

import * as React from 'react';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';

import H5 from '../H5';
import {CollectionT} from '../../types';

type Props = {
  collection: CollectionT;
};

const Wrapper = styled(Block, ({$theme}) => ({
  padding: `${$theme.sizing.scale100} 0`,
  width: '100%',
}));

const Component = styled(Block, ({$theme}) => ({
  padding: $theme.sizing.scale800,
  background: $theme.colors.background,
}));

const CollectionStatsMarquee = (props: Props) => {
  const {
    collection: {collection},
  } = props;
  const [_, theme] = useStyletron();

  let s: string = ' ';
  const sep: string = 'ETH · ';

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
    <Wrapper>
      <Component>
        <H5 margin={0}>{s}</H5>
      </Component>
    </Wrapper>
  );
};

export default CollectionStatsMarquee;

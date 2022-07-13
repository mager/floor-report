import React from 'react';
import TimeAgo from 'react-timeago';

import {Block} from 'baseui/block';

import Text from '../Text';
import {StatsT} from '../../types';

type Props = {
  stats: StatsT;
};

const Stats = ({stats: {totalCollections, totalUsers, updated}}: Props) => {
  return (
    <Block>
      <Text>
        Indexing {totalCollections} collections from {totalUsers} wallets,
        updated <TimeAgo date={updated} />
      </Text>
    </Block>
  );
};

export default Stats;

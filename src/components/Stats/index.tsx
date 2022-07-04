import React from 'react';
import TimeAgo from 'react-timeago';

import {Block} from 'baseui/block';

import Text from '../Text';

type Stats = {
  totalCollections: number;
  totalUsers: number;
  updated: Date;
};

type Props = {
  stats: Stats;
};

const Stats = ({stats: {totalCollections, totalUsers, updated}}: Props) => {
  return (
    <Block>
      <Text>
        Indexing {totalCollections} collections, from {totalUsers} users,
        updated <TimeAgo date={updated} />
      </Text>
    </Block>
  );
};

export default Stats;

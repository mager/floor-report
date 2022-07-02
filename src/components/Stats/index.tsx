import React from 'react';
import TimeAgo from 'react-timeago';

import {styled} from 'baseui';
import {Block} from 'baseui/block';
import {ParagraphMedium} from 'baseui/typography';

import Text from '../Text';

type Props = {
  total: number;
  updated: Date;
};

const Stats = ({total, updated}: Props) => {
  return (
    <Block>
      <Text>
        Indexing {total} collections, updated <TimeAgo date={updated} />
      </Text>
    </Block>
  );
};

export default Stats;

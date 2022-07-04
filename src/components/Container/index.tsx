import React from 'react';

import {styled} from 'baseui';
import {Block} from 'baseui/block';

const Container = styled(Block, ({$theme}) => ({
  margin: 'auto',
  [$theme.mediaQuery.medium]: {
    padding: `${$theme.sizing.scale800} ${$theme.sizing.scale1600}`,
  },
  [$theme.mediaQuery.small]: {
    padding: `${$theme.sizing.scale400} ${$theme.sizing.scale800}`,
  },
}));

export default Container;

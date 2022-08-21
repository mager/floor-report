import * as React from 'react';

import {styled} from 'baseui';
import {Block} from 'baseui/block';

const Container = styled(Block, ({$theme}) => ({
  margin: 'auto',
  maxWidth: `${$theme.breakpoints.large - 1}px`,
  [$theme.mediaQuery.medium]: {
    maxWidth: 'auto',
    padding: `${$theme.sizing.scale800} ${$theme.sizing.scale1600}`,
  },
  [$theme.mediaQuery.small]: {
    maxWidth: 'auto',
    paddingTop: $theme.sizing.scale400,
    paddingBottom: $theme.sizing.scale400,
    paddingLeft: $theme.sizing.scale400,
    paddingRight: $theme.sizing.scale400,
  },
}));

export default Container;

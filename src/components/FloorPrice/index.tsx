import React from 'react';

import {styled} from 'baseui';
import {Block} from 'baseui/block';

const FloorPrice = styled(Block, ({$theme}) => ({
  fontWeight: 600,
  fontStyle: 'italic',
  fontFamily: 'Spline Sans Mono',
  fontSize: $theme.sizing.scale1200,
  color: $theme.colors.contentPositive,
  margin: 0,
  letterSpacing: '-3px',
  [$theme.mediaQuery.medium]: {
    fontSize: $theme.sizing.scale1000,
  },
  [$theme.mediaQuery.small]: {
    fontSize: $theme.sizing.scale800,
  },
}));

export default FloorPrice;

import * as React from 'react';

import {styled} from 'baseui';
import {Block} from 'baseui/block';

const FloorPriceUSD = styled(Block, ({$theme}) => ({
  fontWeight: 300,
  fontStyle: 'italic',
  fontFamily: 'Spline Sans Mono',
  color: $theme.colors.contentTertiary,
  marginTop: $theme.sizing.scale0,
  letterSpacing: '-3px',
  paddingRight: $theme.sizing.scale200,
  [$theme.mediaQuery.medium]: {
    fontSize: $theme.sizing.scale1000,
  },
  [$theme.mediaQuery.small]: {
    fontSize: $theme.sizing.scale800,
    marginTop: $theme.sizing.scale500,
  },
}));

export default FloorPriceUSD;

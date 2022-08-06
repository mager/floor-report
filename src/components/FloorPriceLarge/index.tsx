import React from 'react';

import {styled} from 'baseui';
import {Block} from 'baseui/block';

const Component = styled(Block, ({$theme}) => ({
  fontWeight: 600,
  fontStyle: 'italic',
  fontFamily: 'Spline Sans Mono',
  color: $theme.colors.contentPositive,
  margin: 0,
  letterSpacing: '-3px',
  paddingRight: $theme.sizing.scale200,
  [$theme.mediaQuery.medium]: {
    fontSize: $theme.sizing.scale1400,
  },
  [$theme.mediaQuery.small]: {
    fontSize: $theme.sizing.scale1000,
  },
}));

const ETH = styled('span', ({$theme}) => ({
  fontSize: $theme.sizing.scale800,
  fontFamily: 'Helvetica',
}));

const FloorPrice = ({children}) => {
  return (
    <Component>
      {children}
      <ETH>Ξ</ETH>
    </Component>
  );
};

export default FloorPrice;

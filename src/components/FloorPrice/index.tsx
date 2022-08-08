import * as React from 'react';

import {styled} from 'baseui';
import {Block} from 'baseui/block';

const Component = styled(Block, ({$theme}) => ({
  fontWeight: 600,
  fontStyle: 'italic',
  fontFamily: 'Spline Sans Mono',
  fontSize: $theme.sizing.scale1200,
  color: $theme.colors.contentPositive,
  margin: 0,
  letterSpacing: '-3px',
  [$theme.mediaQuery.medium]: {
    fontSize: $theme.sizing.scale900,
  },
  [$theme.mediaQuery.small]: {
    fontSize: $theme.sizing.scale800,
  },
}));

const ETH = styled('span', ({$theme}) => ({
  fontSize: $theme.sizing.scale600,
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

import * as React from 'react';

import {styled} from 'baseui';
import Text from '../../components/Text';

const Component = styled(Text, ({$theme}) => ({
  fontSize: $theme.sizing.scale800,
  fontFamily: 'Spline Sans Mono',
  margin: 0,
  letterSpacing: '-1px',
  [$theme.mediaQuery.medium]: {
    fontSize: $theme.sizing.scale650,
  },
  [$theme.mediaQuery.small]: {
    fontSize: $theme.sizing.scale550,
  },
}));

const ETH = styled('span', ({$theme}) => ({
  fontSize: $theme.sizing.scale550,
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

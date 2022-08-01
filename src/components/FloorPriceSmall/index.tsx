import React from 'react';

import {styled} from 'baseui';
import Text from '../../components/Text';

const Component = styled(Text, ({$theme}) => ({
  fontSize: $theme.sizing.scale1200,
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

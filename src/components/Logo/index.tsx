import * as React from 'react';

import {styled} from 'baseui';
import {Block} from 'baseui/block';

const AppName = styled(Block, ({$theme}) => ({
  fontSize: $theme.sizing.scale1600,
  textDecoration: 'none',
  fontFamily: 'Coustard',
  fontWeight: 'bold',
  padding: `${$theme.sizing.scale800} 0`,
}));

const Logo = () => {
  return <AppName>Floor Report</AppName>;
};

export default Logo;

import * as React from 'react';

import {styled} from 'baseui';
import {Block} from 'baseui/block';

const Component = styled(Block, ({$theme}) => ({
  flex: 1,
  background: $theme.colors.background,
}));

const Main = ({children}) => {
  return <Component>{children}</Component>;
};

export default Main;

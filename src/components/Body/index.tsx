import React from 'react';

import {styled} from 'baseui';
import {Block} from 'baseui/block';

const Component = styled(Block, ({$theme}) => ({
  minHeight: '100vh',
}));

const Body = ({children}) => {
  return <Component>{children}</Component>;
};

export default Body;

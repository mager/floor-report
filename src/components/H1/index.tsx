import React from 'react';

import {styled} from 'baseui';
import {HeadingXXLarge} from 'baseui/typography';

const Component = styled(HeadingXXLarge, ({$theme}) => ({
  letterSpacing: '-1px',
  marginTop: 0,
}));

const H1 = ({children}) => {
  return <Component>{children}</Component>;
};

export default H1;

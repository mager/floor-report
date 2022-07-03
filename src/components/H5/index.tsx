import React from 'react';

import {styled} from 'baseui';
import {HeadingSmall} from 'baseui/typography';

const Component = styled(HeadingSmall, ({$theme}) => ({
  letterSpacing: '-1px',
  margin: 0,
}));

const H5 = ({children, ...props}) => {
  return <Component {...props}>{children}</Component>;
};

export default H5;

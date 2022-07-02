import React from 'react';

import {styled} from 'baseui';
import {HeadingXSmall} from 'baseui/typography';

const Component = styled(HeadingXSmall, ({$theme}) => ({
  letterSpacing: '-1px',
  marginTop: 0,
}));

const H6 = ({children, ...props}) => {
  return <Component {...props}>{children}</Component>;
};

export default H6;

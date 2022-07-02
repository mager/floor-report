import React from 'react';

import {styled} from 'baseui';
import {HeadingMedium} from 'baseui/typography';

const Component = styled(HeadingMedium, ({$theme}) => ({
  letterSpacing: '-1px',
  marginTop: 0,
}));

const H4 = ({children, ...props}) => {
  return <Component {...props}>{children}</Component>;
};

export default H4;

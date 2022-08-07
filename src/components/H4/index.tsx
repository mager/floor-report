import React from 'react';

import {styled} from 'baseui';
import {HeadingMedium} from 'baseui/typography';

const Component = styled(HeadingMedium, ({$theme}) => ({
  letterSpacing: '-1px',
  margin: `0 0 ${$theme.sizing.scale400}`,
}));

const H4 = ({children, ...props}) => {
  return <Component {...props}>{children}</Component>;
};

export default H4;

import React from 'react';

import {styled} from 'baseui';
import {HeadingXXLarge} from 'baseui/typography';

const Component = styled(HeadingXXLarge, ({$theme}) => ({
  letterSpacing: '-1px',
  margin: 0,
  [$theme.mediaQuery.small]: {
    fontSize: $theme.sizing.scale800,
    lineHeight: $theme.sizing.scale1000,
  },
}));

const H1 = ({children, ...props}) => {
  return <Component {...props}>{children}</Component>;
};

export default H1;

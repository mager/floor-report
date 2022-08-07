import React from 'react';

import {styled} from 'baseui';
import {HeadingXSmall} from 'baseui/typography';

const Component = styled(HeadingXSmall, ({$theme}) => ({
  letterSpacing: '-1px',
  margin: `0 0 ${$theme.sizing.scale400}`,
  [$theme.mediaQuery.medium]: {
    fontSize: $theme.sizing.scale700,
    lineHeight: $theme.sizing.scale1000,
  },
  [$theme.mediaQuery.small]: {
    fontSize: $theme.sizing.scale600,
    lineHeight: $theme.sizing.scale800,
  },
}));

const H6 = ({children, ...props}) => {
  return <Component {...props}>{children}</Component>;
};

export default H6;

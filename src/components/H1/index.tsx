import React from 'react';

import {styled} from 'baseui';
import {HeadingXXLarge} from 'baseui/typography';

const Component = styled(HeadingXXLarge, ({$theme}) => ({
  color: $theme.colors.primary,
  letterSpacing: '-1px',
  margin: 0,
  [$theme.mediaQuery.medium]: {
    fontSize: $theme.sizing.scale1200,
    lineHeight: $theme.sizing.scale1000,
  },
  [$theme.mediaQuery.small]: {
    fontSize: $theme.sizing.scale900,
    lineHeight: $theme.sizing.scale900,
  },
}));

const H1 = ({children, ...props}) => {
  return <Component {...props}>{children}</Component>;
};

export default H1;

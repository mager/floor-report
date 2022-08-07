import React from 'react';

import {styled} from 'baseui';
import {HeadingXLarge} from 'baseui/typography';

const Component = styled(HeadingXLarge, ({$theme}) => ({
  color: $theme.colors.primary,
  letterSpacing: '-1px',
  paddingTop: $theme.sizing.scale200,
  margin: `0 0 ${$theme.sizing.scale400}`,
  [$theme.mediaQuery.medium]: {
    fontSize: $theme.sizing.scale1200,
    lineHeight: $theme.sizing.scale1000,
  },
  [$theme.mediaQuery.small]: {
    fontSize: $theme.sizing.scale950,
    lineHeight: $theme.sizing.scale950,
  },
}));

const H2 = ({children, ...props}) => {
  return <Component {...props}>{children}</Component>;
};

export default H2;

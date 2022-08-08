import * as React from 'react';

import {styled} from 'baseui';

const ResponsiveImage = styled('img', ({$theme}) => ({
  [$theme.mediaQuery.medium]: {
    width: '128px',
    height: '128px',
  },
  [$theme.mediaQuery.small]: {
    width: '64px',
    height: '64px',
  },
}));

export default ResponsiveImage;

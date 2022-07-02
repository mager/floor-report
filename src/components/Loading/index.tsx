import React from 'react';

import {withStyle} from 'baseui';
import {StyledSpinnerNext} from 'baseui/spinner';

const Component = withStyle(StyledSpinnerNext, ({$theme}) => ({
  width: $theme.sizing.scale4800,
  height: $theme.sizing.scale4800,
  margin: '0 auto',
  display: 'block',
  padding: `${$theme.sizing.scale800} 0`,
}));

const Loading = () => {
  return <Component />;
};

export default Loading;

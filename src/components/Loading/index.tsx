import React from 'react';

import {withStyle} from 'baseui';
import {StyledSpinnerNext, SIZE} from 'baseui/spinner';

const Component = withStyle(StyledSpinnerNext, ({$theme}) => ({
  width: $theme.sizing.scale4800,
  height: $theme.sizing.scale4800,
  margin: `${$theme.sizing.scale1600} auto`,
  display: 'block',
  padding: `${$theme.sizing.scale800}`,
}));

const Loading = () => {
  return <Component $size={SIZE.large} />;
};

export default Loading;

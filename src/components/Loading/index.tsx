import React from 'react';

import {styled} from 'baseui';
import {Spinner} from 'baseui/spinner';

const Component = styled(Spinner, ({$theme}) => ({
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

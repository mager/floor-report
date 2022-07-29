import React from 'react';

import {styled} from 'baseui';

const Component = styled('span', ({$theme}) => ({
  marginLeft: $theme.sizing.scale200,
  marginRight: $theme.sizing.scale200,
}));

const Separator = () => {
  return <Component>|</Component>;
};

export default Separator;

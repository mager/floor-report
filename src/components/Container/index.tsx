import React from 'react';
import {styled} from 'baseui';
import {Block} from 'baseui/block';

//           [`@media screen and (max-width: ${theme.breakpoints.large - 1}px)`]: {
const Container = styled(Block, ({$theme}) => ({
  margin: 'auto',
  maxWidth: `${$theme.breakpoints.large - 1}px`,
  [$theme.mediaQuery.small]: {
    maxWidth: 'auto',
    padding: `0 ${$theme.sizing.scale1600}`,
  },
}));

export default Container;

import React from 'react';
import {styled} from 'baseui';
import {Block} from 'baseui/block';

//           [`@media screen and (max-width: ${theme.breakpoints.large - 1}px)`]: {
const Container = styled(Block, ({$theme}) => ({
  margin: 'auto',
  maxWidth: `${$theme.breakpoints.large - 1}px`,
  [$theme.mediaQuery.medium]: {
    maxWidth: 'auto',
    padding: `0 ${$theme.sizing.scale1600}`,
  },
  [$theme.mediaQuery.small]: {
    maxWidth: 'auto',
    padding: `0 ${$theme.sizing.scale800}`,
  },
}));

export default Container;

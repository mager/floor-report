import React from 'react';
import {styled} from 'baseui';
import {Block} from 'baseui/block';

const Container = styled(Block, ({$theme}) => ({
  margin: `${$theme.sizing.scale400} 0 0`,
  padding: `0 ${$theme.sizing.scale800}`,
}));

export default Container;

import * as React from 'react';

import {styled} from 'baseui';
import {Block} from 'baseui/block';

const Quantity = styled(Block, ({$theme}) => ({
  fontFamily: 'Spline Sans Mono',
  fontStyle: 'italic',
  fontSize: $theme.sizing.scale500,
  fontWeight: 300,
  borderRadius: $theme.borders.radius500,
  background: $theme.colors.backgroundTertiary,
  paddingTop: $theme.sizing.scale100,
  paddingBottom: $theme.sizing.scale100,
  paddingLeft: $theme.sizing.scale200,
  paddingRight: $theme.sizing.scale200,
  position: 'absolute',
  top: `-${$theme.sizing.scale200}`,
  right: `-${$theme.sizing.scale200}`,
}));

export default Quantity;

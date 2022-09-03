import * as React from 'react';

import {styled} from 'baseui';
import {LabelSmall} from 'baseui/typography';

const Component = styled(LabelSmall, ({$theme}) => ({
  lineHeight: $theme.sizing.scale800,
  textDecoration: 'none',
  borderBottom: 'none',
}));

const Label = ({children, ...props}) => {
  return <Component {...props}>{children}</Component>;
};

export default Label;

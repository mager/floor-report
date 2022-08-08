import * as React from 'react';

import {styled} from 'baseui';
import {ParagraphMedium} from 'baseui/typography';

const Paragraph = styled(ParagraphMedium, ({$theme}) => ({
  fontFamily: 'Titillium Web',
  fontSize: '16px',
  marginBottom: 0,
}));

const Text = ({children, ...props}) => {
  return <Paragraph {...props}>{children}</Paragraph>;
};

export default Text;

import React from 'react';

import {styled} from 'baseui';
import {ParagraphMedium} from 'baseui/typography';

const Paragraph = styled(ParagraphMedium, ({$theme}) => ({
  fontFamily: 'Titillium Web',
  fontSize: '16px',
}));

const Text = ({children}) => {
  return <Paragraph>{children}</Paragraph>;
};

export default Text;

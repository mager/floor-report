import React from 'react';
import {ParagraphMedium} from 'baseui/typography';
import {styled} from 'baseui';

const Paragraph = styled(ParagraphMedium, ({$theme}) => ({
  fontFamily: 'Titillium Web',
  fontSize: '16px',
}));

export default ({children}) => {
  return <Paragraph>{children}</Paragraph>;
};

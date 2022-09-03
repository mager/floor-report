import * as React from 'react';

import {styled} from 'baseui';
import {ParagraphMedium} from 'baseui/typography';

const Paragraph = styled(ParagraphMedium, ({$theme}) => ({
  fontFamily: 'Titillium Web',
  fontSize: '16px',
  marginBottom: 0,
}));

const ItalicParagraph = styled(ParagraphMedium, ({$theme}) => ({
  fontFamily: 'Titillium Web',
  fontSize: '16px',
  marginBottom: 0,
  fontStyle: 'italic',
}));

const Text = ({children, ...props}) => {
  return props.italic ? (
    <ItalicParagraph {...props}>{children}</ItalicParagraph>
  ) : (
    <Paragraph {...props}>{children}</Paragraph>
  );
};

export default Text;

import React from 'react';

import {styled} from 'baseui';

const Link = styled('a', ({$theme}) => ({
  color: $theme.colors.contentSecondary,
  fontFamily: 'Titillium Web',
  cursor: 'pointer',
  textDecoration: 'none',
  borderBottom: `1px solid ${$theme.colors.contentSecondary}`,
}));

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

const InlineLink = ({children, onClick}: Props) => {
  return <Link onClick={onClick}>{children}</Link>;
};

export default InlineLink;

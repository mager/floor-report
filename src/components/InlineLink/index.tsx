import React from 'react';

import {styled} from 'baseui';

const styles = {
  color: 'contentSecondary',
  fontFamily: 'Titillium Web',
  cursor: 'pointer',
  textDecoration: 'none',
};

const Link = styled('a', ({$theme}) => ({
  ...styles,
  borderBottom: `1px solid ${$theme.colors.contentSecondary}`,
}));

const DisabledLink = styled('span', ({$theme}) => ({
  ...styles,
}));

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const InlineLink = ({children, onClick, disabled}: Props) => {
  if (disabled) {
    return <DisabledLink>{children}</DisabledLink>;
  }

  return <Link onClick={onClick}>{children}</Link>;
};

export default InlineLink;

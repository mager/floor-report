import * as React from 'react';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation';
import {StyledLink} from 'baseui/link';
import {Button} from 'baseui/button';

import Logo from '../Logo';

export default () => {
  return (
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <Logo />
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <StyledLink href="#basic-link1">Trending</StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledLink href="#basic-link2">Frens</StyledLink>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Button>Get started</Button>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
};

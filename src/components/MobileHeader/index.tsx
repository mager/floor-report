import * as React from 'react';

import {styled, useStyletron, withStyle} from 'baseui';

import {Block} from 'baseui/block';
import {StyledLink} from 'baseui/link';
import Menu from 'baseui/icon/menu';

import HeaderMenu from '../../components/HeaderMenu';
import SearchInput from '../../components/SearchInput';

const Container = styled(Block, ({$theme}) => ({
  padding: `${$theme.sizing.scale400} 0`,
  borderBottom: `1px solid ${$theme.colors.borderOpaque}`,
  marginBottom: $theme.sizing.scale400,
  // Hide on desktop
  [$theme.mediaQuery.medium]: {
    display: 'none',
  },
}));

const AppName = withStyle(StyledLink, ({$theme}) => ({
  fontSize: $theme.sizing.scale1000,
  textDecoration: 'none',
  fontFamily: 'Coustard',
  fontWeight: 'bold',
  padding: `0 ${$theme.sizing.scale400}`,
  color: $theme.colors.primary,
}));

const Hamburger = styled(Block, ({$theme}) => ({
  padding: `0 ${$theme.sizing.scale400}`,
}));

const LogoContainer = styled(Block, ({}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const MobileHeader = () => {
  const [_, theme] = useStyletron();
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = React.useState(false);

  return (
    <Container>
      <LogoContainer>
        <AppName href="/" $theme={theme}>
          Fr
        </AppName>
        <SearchInput placeholder="Search for a collection" />
        <Hamburger>
          <Menu
            size={36}
            onClick={() => setIsHeaderMenuOpen(!isHeaderMenuOpen)}
          />
        </Hamburger>
      </LogoContainer>
      <HeaderMenu isOpen={isHeaderMenuOpen} setIsOpen={setIsHeaderMenuOpen} />
    </Container>
  );
};

export default MobileHeader;

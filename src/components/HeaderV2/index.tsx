import React from 'react';

import {styled, withStyle, useStyletron} from 'baseui';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';
import {StyledLink as Link} from 'baseui/link';
import {StyledLink} from 'baseui/link';

import Container from '../Container';
// import Input from '../Input';
import {Routes} from '../../constants';

const AppName = withStyle(StyledLink, ({$theme}) => ({
  fontSize: $theme.sizing.scale1600,
  textDecoration: 'none',
  fontFamily: 'Coustard',
  fontWeight: 'bold',
  padding: `${$theme.sizing.scale800} 0`,
}));

const ResponsiveHeaderNavigation = styled(HeaderNavigation, ({$theme}) => ({
  padding: `${$theme.sizing.scale200} 0`,
  [$theme.mediaQuery.medium]: {
    padding: `${$theme.sizing.scale400} 0`,
  },
  [$theme.mediaQuery.small]: {
    padding: `${$theme.sizing.scale800} 0`,
  },
}));

const Header = () => {
  const [_, theme] = useStyletron();
  return (
    <Container>
      <ResponsiveHeaderNavigation
        overrides={{
          Root: {
            style: ({$theme}) => ({
              padding: `${$theme.sizing.scale200} 0`,
              border: 'none',
            }),
          },
        }}
      >
        <NavigationList $align={ALIGN.left}>
          <NavigationItem
            $style={{
              paddingLeft: 0,
            }}
          >
            <AppName href="/" $theme={undefined}>
              Fr
            </AppName>
          </NavigationItem>
        </NavigationList>
        <NavigationList
          $align={ALIGN.center}
          $style={{
            marginBottom: theme.sizing.scale400,
          }}
        >
          {/* <Input
            placeholder="Search for an address or collection"
            onDoneTyping={(val) => console.log('Value is updated to: ', val)}
          /> */}
        </NavigationList>
        <NavigationList
          $align={ALIGN.right}
          $style={{
            marginBottom: theme.sizing.scale400,
          }}
        >
          <NavigationItem>
            <Link href={Routes.ABOUT()}>About</Link>
          </NavigationItem>
          <NavigationItem>
            <Link href={Routes.UPDATES()}>Updates</Link>
          </NavigationItem>
        </NavigationList>
      </ResponsiveHeaderNavigation>
    </Container>
  );
};

export default Header;

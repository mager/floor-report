import React from 'react';

import {styled, withStyle, useStyletron} from 'baseui';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';
import {StyledLink as Link} from 'baseui/link';
import {Block} from 'baseui/block';
import {StyledLink} from 'baseui/link';

import Container from '../Container';
import SearchInput from '../SearchInput';
import {Routes} from '../../constants';

const AppName = withStyle(StyledLink, ({$theme}) => ({
  fontSize: $theme.sizing.scale1600,
  textDecoration: 'none',
  fontFamily: 'Coustard',
  fontWeight: 'bold',
  padding: `${$theme.sizing.scale800} 0`,
}));

const Header = () => {
  const [css, theme] = useStyletron();
  return (
    <Container>
      <HeaderNavigation
        overrides={{
          Root: {
            style: ({$theme}) => ({
              padding: `${$theme.sizing.scale400} 0`,
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'transparent',
              [$theme.mediaQuery.medium]: {
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: `${$theme.sizing.scale400} 0`,
              },
              [$theme.mediaQuery.small]: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '100%',
                padding: `${$theme.sizing.scale800} 0 ${$theme.sizing.scale400}`,
              },
            }),
          },
        }}
      >
        <Block
          className={css({
            display: 'flex',
            width: '100%',
          })}
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
              [theme.mediaQuery.small]: {
                marginLeft: theme.sizing.scale400,
              },
            }}
          >
            <SearchInput placeholder="Search for a collection" />
          </NavigationList>
        </Block>
        <Block>
          <NavigationList
            $style={{
              marginBottom: theme.sizing.scale400,
            }}
          >
            <NavigationItem
              $style={{
                paddingLeft: 0,
              }}
            >
              <Link href={Routes.COLLECTIONS()}>Collections</Link>
            </NavigationItem>
            <NavigationItem>
              <Link href={Routes.FRENS()}>Frens</Link>
            </NavigationItem>
          </NavigationList>
        </Block>
      </HeaderNavigation>
    </Container>
  );
};

export default Header;

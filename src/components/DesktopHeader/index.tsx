import * as React from 'react';

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

import ConnectButton from '../ConnectButton';
import SearchInput from '../SearchInput';
import {Routes} from '../../constants';
import useAddress from '../../utils/hooks/useAddress';

const AppName = withStyle(StyledLink, ({$theme}) => ({
  fontSize: $theme.sizing.scale1600,
  textDecoration: 'none',
  fontFamily: 'Coustard',
  fontWeight: 'bold',
  padding: `${$theme.sizing.scale800} 0`,
  color: $theme.colors.primary,
}));

const Container = styled(Block, ({$theme}) => ({
  margin: 'auto',
  maxWidth: `${$theme.breakpoints.large - 1}px`,
  display: 'flex',
  [$theme.mediaQuery.medium]: {
    maxWidth: 'auto',
    display: 'flex',
    padding: `${$theme.sizing.scale800} ${$theme.sizing.scale1600}`,
  },
  [$theme.mediaQuery.small]: {
    display: 'none',
  },
}));

const Header = () => {
  const [css, theme] = useStyletron();
  const address = useAddress();

  return (
    <Container>
      <HeaderNavigation
        overrides={{
          Root: {
            style: ({$theme}) => ({
              paddingTop: $theme.sizing.scale400,
              paddingBottom: $theme.sizing.scale400,
              borderBottomWidth: 0,
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'transparent',
              [$theme.mediaQuery.medium]: {
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
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
            <NavigationItem $style={{paddingLeft: 0}}>
              <AppName href="/" $theme={theme}>
                Fr
              </AppName>
            </NavigationItem>
          </NavigationList>
          <NavigationList
            $align={ALIGN.center}
            $style={{
              marginRight: theme.sizing.scale800,
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
            {address && (
              <NavigationItem
                $style={{
                  paddingLeft: address ? 0 : theme.sizing.scale800,
                }}
              >
                <Link href={Routes.ADDRESS(address)}>Me</Link>
              </NavigationItem>
            )}
            <NavigationItem
              $style={{
                paddingLeft: address ? theme.sizing.scale800 : 0,
              }}
            >
              <Link href={Routes.COLLECTIONS()}>Collections</Link>
            </NavigationItem>
            <NavigationItem>
              <Link href={Routes.FRENS()}>Frens</Link>
            </NavigationItem>
            <NavigationItem>
              <ConnectButton label="Connect" />
            </NavigationItem>
          </NavigationList>
        </Block>
      </HeaderNavigation>
    </Container>
  );
};

export default Header;

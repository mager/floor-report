import * as React from 'react';
import {useRouter} from 'next/router';

import {withStyle} from 'baseui';
import {AppNavBar, setItemActive} from 'baseui/app-nav-bar';
import {Button} from 'baseui/button';
import {Show} from 'baseui/icon';
import {StyledLink} from 'baseui/link';
import {Routes} from '../../constants';

const AppName = withStyle(StyledLink, ({$theme}) => ({
  fontSize: $theme.sizing.scale1600,
  textDecoration: 'none',
  fontFamily: 'Coustard',
  fontWeight: 'bold',
  padding: `${$theme.sizing.scale800} 0`,
}));

const Header = () => {
  const router = useRouter();
  const [mainItems, setMainItems] = React.useState([
    {icon: Show, label: 'About', info: {href: Routes.ABOUT()}},
    {icon: Show, label: 'Updates', info: {href: Routes.UPDATES()}},
  ]);

  return (
    <AppNavBar
      title="Floor Report"
      mainItems={mainItems}
      onMainItemSelect={(item) => {
        router.push(item.info.href);

        // @ts-ignore
        setMainItems((prev) => setItemActive(prev, item));
      }}
      overrides={{
        Root: {
          style: {
            backgroundColor: '#f5f5f5',
            maxWidth: 'auto',
          },
        },
        AppName: {
          // @ts-ignore
          component: () => <AppName href="/">Fr</AppName>,
        },
        MainMenuItem: {
          style: ({$theme}) => ({
            fontFamily: 'Coustard',
          }),
        },
      }}
    />
  );
};

export default Header;

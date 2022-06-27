import * as React from 'react';
import {useRouter} from 'next/router';

import {withStyle} from 'baseui';
import {AppNavBar, setItemActive} from 'baseui/app-nav-bar';
import {Button} from 'baseui/button';
import {Show} from 'baseui/icon';
import {StyledLink} from 'baseui/link';

const AppName = withStyle(StyledLink, ({$theme}) => ({
  fontSize: $theme.sizing.scale1600,
  textDecoration: 'none',
  fontFamily: 'Coustard',
  fontWeight: 'bold',
  padding: `${$theme.sizing.scale800} 0`,
}));

export default () => {
  const router = useRouter();
  const [mainItems, setMainItems] = React.useState([
    {icon: Show, label: 'About', info: {href: '/about'}},
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
      onUserItemSelect={(item) => console.log(item)}
      overrides={{
        AppName: {
          // @ts-ignore
          component: () => <AppName href="/">Fr</AppName>,
        },
        MainMenuItem: {
          style: ({$theme}) => ({
            fontFamily: 'Coustard',
          }),
        },
        Root: {
          style: ({$theme}) => ({
            marginLeft: '0 !important',
          }),
        },
      }}
    />
  );
};

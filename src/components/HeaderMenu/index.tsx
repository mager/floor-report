import React, {useCallback, useEffect} from 'react';

import {styled, useStyletron, withStyle} from 'baseui';
import {Block} from 'baseui/block';
import ChevronRight from 'baseui/icon/chevron-right';
import {StyledLink as Link} from 'baseui/link';

import ConnectButton from '../../components/ConnectButton';
import Drawer from '../../components/Drawer';
import {Routes} from '../../constants';
import {useAddress} from '../../utils/hooks';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const NavLink = withStyle(Link, ({$theme}) => ({
  padding: `${$theme.sizing.scale600} 0`,
  display: 'block',
  fontSize: $theme.sizing.scale800,
  textDecoration: 'none',
  margin: `${$theme.sizing.scale100} 0`,
}));

const HeaderMenu = ({isOpen, setIsOpen}: Props) => {
  const [_, theme] = useStyletron();
  const address = useAddress();

  return (
    <Drawer
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      actions={<ConnectButton label="Connect" />}
    >
      {address && (
        <NavLink $theme={theme} href={Routes.ADDRESS(address)}>
          My Wallet
        </NavLink>
      )}
      <NavLink $theme={theme} href={Routes.FRENS()}>
        Frens
      </NavLink>
      <NavLink $theme={theme} href={Routes.COLLECTIONS()}>
        Collections
      </NavLink>
    </Drawer>
  );
};

export default HeaderMenu;

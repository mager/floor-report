import React, {useCallback, useEffect} from 'react';

import {styled} from 'baseui';
import {Block} from 'baseui/block';
import {Drawer as BaseDrawer, SIZE} from 'baseui/drawer';
import ChevronRight from 'baseui/icon/chevron-right';

const Container = styled(Block, ({$theme}) => ({
  minWidth: '300px',
  padding: $theme.sizing.scale400,
}));

const ActionContainer = styled(Block, ({$theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: `${$theme.sizing.scale400} 0`,
}));

type Props = {
  actions?: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Drawer = ({actions, children, isOpen, setIsOpen}: Props) => {
  const escFunction = useCallback((event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  return (
    <BaseDrawer
      isOpen={isOpen}
      size={SIZE.auto}
      overrides={{
        Close: {
          style: {
            display: 'none',
          },
        },
        DrawerBody: {
          style: () => ({
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }),
        },
      }}
    >
      <Container>
        <ActionContainer>
          {actions}
          <ChevronRight onClick={() => setIsOpen(false)} size={48} />
        </ActionContainer>
        {children}
      </Container>
    </BaseDrawer>
  );
};

export default Drawer;

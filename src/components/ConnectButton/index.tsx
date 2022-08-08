import * as React from 'react';
import {ConnectButton as RainbowButton} from '@rainbow-me/rainbowkit';

import {styled} from 'baseui';
import {Block} from 'baseui/block';
import {Button} from 'baseui/button';
import {StyledLink} from 'baseui/link';

type Props = {
  label: string;
};

const ConnectButtonComponent = styled(Button, ({$theme}) => ({
  padding: `${$theme.sizing.scale400} ${$theme.sizing.scale600}`,
}));

const ConnectButtonContainer = styled(Block, ({$theme}) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const ConnectButton = ({label}: Props) => {
  return (
    <RainbowButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <Block
            {...(!mounted && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <ConnectButtonComponent onClick={openConnectModal}>
                    {label}
                  </ConnectButtonComponent>
                );
              }

              return (
                <Block>
                  <ConnectButtonComponent onClick={openAccountModal}>
                    <ConnectButtonContainer>
                      <Block>{account.displayName}</Block>
                    </ConnectButtonContainer>
                  </ConnectButtonComponent>
                </Block>
              );
            })()}
          </Block>
        );
      }}
    </RainbowButton.Custom>
  );
};

export default ConnectButton;

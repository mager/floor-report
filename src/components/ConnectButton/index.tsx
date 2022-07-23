import React from 'react';
import {ConnectButton as RainbowButton} from '@rainbow-me/rainbowkit';

import {styled} from 'baseui';
import {Block} from 'baseui/block';
import {Button} from 'baseui/button';

type Props = {
  label: string;
};

const ConnectButtonContainer = styled(Block, ({$theme}) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const WalletBalance = styled(Block, ({$theme}) => ({
  color: $theme.colors.contentPositive,
  fontSize: $theme.sizing.scale500,
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
                return <Button onClick={openConnectModal}>{label}</Button>;
              }

              return (
                <Block>
                  <Button
                    onClick={openAccountModal}
                    overrides={{
                      BaseButton: {
                        style: ({$theme}) => ({
                          border: 'none',
                          width: '100%',
                          paddingTop: $theme.sizing.scale200,
                          paddingBottom: $theme.sizing.scale200,
                        }),
                      },
                    }}
                  >
                    <ConnectButtonContainer>
                      <Block>{account.displayName}</Block>
                      <WalletBalance>({account.displayBalance})</WalletBalance>
                    </ConnectButtonContainer>
                  </Button>
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

import React, {useState} from 'react';
import {useAccount} from 'wagmi';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';
import {Button} from 'baseui/button';
import {Check} from 'baseui/icon';
import {Input} from 'baseui/input';
import {useSnackbar, DURATION} from 'baseui/snackbar';

import Checkbox from '../../components/Checkbox';
import Drawer from '../../components/Drawer';
import H2 from '../../components/H2';
import H5 from '../../components/H5';
import ResponsiveImage from '../../components/ResponsiveImage';
import {UserSettingsT} from '../../types';

type Props = {
  displayName: string;
  imageSrc: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  settings: UserSettingsT;
};

const PhotoContainer = styled(Block, ({$theme}) => ({
  margin: `${$theme.sizing.scale800} 0`,
}));

const PhotoInner = styled(Block, ({$theme}) => ({
  display: 'flex',
  alignItems: 'center',
}));

const EditProfile = ({
  displayName,
  imageSrc,
  isOpen,
  setIsOpen,
  settings,
}: Props) => {
  const [_, theme] = useStyletron();
  const {enqueue} = useSnackbar();
  const [loading, setLoading] = useState(false);

  const [hide0ETHCollections, setHide0ETHCollections] = React.useState(
    settings?.hide0ETHCollections ? settings.hide0ETHCollections : false,
  );
  const account = useAccount();

  const saveSettings = async () => {
    setLoading(true);
    const address = account.address.toLowerCase();
    const resp = await fetch(`/api/user/${address}/settings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hide0ETHCollections,
      }),
    });
    if (resp.status === 200) {
      enqueue(
        {
          message: 'Settings saved',
          startEnhancer: ({size}) => <Check size={size} />,
        },
        DURATION.short,
      );
    }
    setLoading(false);
  };

  return (
    <Drawer
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      actions={<H2>Edit Profile</H2>}
    >
      <PhotoContainer>
        <H5>Photo - Coming soon!</H5>
        <PhotoInner>
          <ResponsiveImage src={imageSrc} alt={displayName} />
          <Input
            type="file"
            disabled
            overrides={{
              Root: {
                style: {
                  border: 'none',
                },
              },
              Input: {
                style: {
                  backgroundColor: theme.colors.background,
                },
              },
            }}
          />
        </PhotoInner>
      </PhotoContainer>
      <Block>
        {/* Checkbox settings */}
        <H5>Settings</H5>
        <Checkbox
          checked={hide0ETHCollections}
          onChange={() => {
            setHide0ETHCollections(!hide0ETHCollections);
          }}
        >
          Hide 0ETH collections
        </Checkbox>
      </Block>
      <Block marginTop={theme.sizing.scale800}>
        <Button onClick={() => saveSettings()} isLoading={loading}>
          Save
        </Button>
      </Block>
    </Drawer>
  );
};

export default EditProfile;

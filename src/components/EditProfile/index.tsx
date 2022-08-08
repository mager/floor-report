import * as React from 'react';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';
import {Input} from 'baseui/input';

import Drawer from '../../components/Drawer';
import H2 from '../../components/H2';
import H5 from '../../components/H5';
import ResponsiveImage from '../../components/ResponsiveImage';
import Text from '../../components/Text';

type Props = {
  displayName: string;
  imageSrc: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const PhotoContainer = styled(Block, ({$theme}) => ({
  margin: `${$theme.sizing.scale800} 0`,
}));

const PhotoInner = styled(Block, ({$theme}) => ({
  display: 'flex',
  alignItems: 'center',
}));

const EditProfile = ({displayName, imageSrc, isOpen, setIsOpen}: Props) => {
  const [_, theme] = useStyletron();
  return (
    <Drawer
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      actions={<H2>Edit Profile</H2>}
    >
      <PhotoContainer>
        <H5>Photo</H5>
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
        <Text>Coming Soon!</Text>
      </PhotoContainer>
    </Drawer>
  );
};

export default EditProfile;

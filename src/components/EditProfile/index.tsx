import React from 'react';

import {styled, useStyletron} from 'baseui';
import {Block} from 'baseui/block';
import {Drawer} from 'baseui/drawer';

import H2 from '../H2';
import H5 from '../H5';
import Text from '../Text';
import ResponsiveImage from '../ResponsiveImage';
import {Input} from 'baseui/input';

type Props = {
  displayName: string;
  imageSrc: string;
  isOpen: boolean;
  onClose: () => void;
};

const PhotoContainer = styled(Block, ({$theme}) => ({
  margin: `${$theme.sizing.scale800} 0`,
}));

const PhotoInner = styled(Block, ({$theme}) => ({
  display: 'flex',
  alignItems: 'center',
}));

const EditProfile = ({displayName, imageSrc, isOpen, onClose}: Props) => {
  const [_, theme] = useStyletron();
  return (
    <Drawer isOpen={isOpen} autoFocus onClose={onClose}>
      <H2>Edit Profile</H2>
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

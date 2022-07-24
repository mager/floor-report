import React from 'react';

import {Drawer} from 'baseui/drawer';

import H2 from '../H2';
import Text from '../Text';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const EditProfile = ({isOpen, onClose}: Props) => {
  return (
    <Drawer isOpen={isOpen} autoFocus onClose={onClose}>
      <H2>Edit Profile</H2>
      <Text>Coming Soon</Text>
    </Drawer>
  );
};

export default EditProfile;

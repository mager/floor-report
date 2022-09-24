import React, {ChangeEvent} from 'react';

import {Checkbox, LABEL_PLACEMENT} from 'baseui/checkbox';

type Props = {
  checked: boolean;
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Component = ({checked, children, onChange}: Props) => {
  return (
    <Checkbox
      checked={checked}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange(e);
      }}
      labelPlacement={LABEL_PLACEMENT.right}
    >
      {children}
    </Checkbox>
  );
};

export default Component;

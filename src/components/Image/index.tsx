import * as React from 'react';

import {Avatar} from 'baseui/avatar';

type Props = {
  name: string;
  size: string;
  src: string;
};

const Image = ({name, size, src}: Props) => {
  return (
    <Avatar
      overrides={{
        Avatar: {
          style: () => ({
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          }),
        },
        Root: {
          style: () => ({
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          }),
        },
      }}
      name={name}
      size={size}
      src={src}
    />
  );
};

export default Image;

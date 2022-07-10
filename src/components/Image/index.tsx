import React from 'react';

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
          style: ({$theme}) => ({
            borderTopLeftRadius: $theme.borders.radius100,
            borderTopRightRadius: $theme.borders.radius100,
            borderBottomRightRadius: $theme.borders.radius100,
            borderBottomLeftRadius: $theme.borders.radius100,
          }),
        },
        Root: {
          style: ({$theme}) => ({
            borderTopLeftRadius: $theme.borders.radius100,
            borderTopRightRadius: $theme.borders.radius100,
            borderBottomRightRadius: $theme.borders.radius100,
            borderBottomLeftRadius: $theme.borders.radius100,
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

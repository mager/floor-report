import React from 'react';

import {Block} from 'baseui/block';

type Props = {
  floor: number;
};

const FloorPrice = (props: Props) => {
  const floor =
    props.floor === -1 ? (
      <abbr title="Still indexing... check back in a few hours">
        {props.floor}
      </abbr>
    ) : (
      props.floor
    );

  return (
    <Block>
      <span>{floor}</span>Ξ
    </Block>
  );
};

export default FloorPrice;

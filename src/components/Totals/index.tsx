import * as React from 'react';

import {Block} from 'baseui/block';

type Props = {
  totalETH: number;
};

const Totals = (props: Props) => {
  return (
    <Block>
      <Block>TOTAL</Block>
      <Block>{props.totalETH.toFixed(3)}Ξ</Block>
    </Block>
  );
};

export default Totals;

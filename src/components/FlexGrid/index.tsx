import * as React from 'react';

import {BlockProps} from 'baseui/block';
import {FlexGrid as Component, FlexGridItem} from 'baseui/flex-grid';

const itemProps: BlockProps = {
  backgroundColor: 'mono300',
  height: 'scale1000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

type Props = {
  children: React.ReactNode;
};

const FlexGrid = ({children}: Props) => (
  <Component
    flexGridColumnCount={[1, 2, 4, 4]}
    flexGridColumnGap="scale800"
    flexGridRowGap="scale800"
  >
    {children}
  </Component>
);

export default FlexGrid;

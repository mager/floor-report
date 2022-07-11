import * as React from 'react';

import {FlexGrid as Component} from 'baseui/flex-grid';

type Props = {
  children: React.ReactNode;
  columns?: number[];
};

const FlexGrid = ({children, columns}: Props) => {
  const flexGridColumnCount = columns ? columns : [1, 2, 4, 4];

  return (
    <Component
      flexGridColumnCount={flexGridColumnCount}
      flexGridColumnGap="scale800"
      flexGridRowGap="scale800"
    >
      {children}
    </Component>
  );
};

export default FlexGrid;

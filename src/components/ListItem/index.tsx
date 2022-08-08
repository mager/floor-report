import * as React from 'react';

import {styled} from 'baseui';
import {ListItemLabel} from 'baseui/list';

const StyledListItem = styled('li', ({$theme}) => ({
  padding: 0,
  margin: 0,
  listStyleType: 'none',
}));

const ListItem = ({children}) => {
  return (
    <StyledListItem>
      <ListItemLabel>{children}</ListItemLabel>
    </StyledListItem>
  );
};

export default ListItem;

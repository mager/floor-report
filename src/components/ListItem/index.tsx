import React from 'react';

import {styled} from 'baseui';
import {ListItem as ListItemComponent, ListItemLabel} from 'baseui/list';

const StyledListItem = styled(ListItemComponent, ({$theme}) => ({
  padding: 0,
  margin: 0,
  fontSize: '2.5rem',
}));

const ListItem = ({children}) => {
  return (
    <StyledListItem>
      <ListItemLabel>{children}</ListItemLabel>
    </StyledListItem>
  );
};

export default ListItem;

import React from 'react';

import {styled} from 'baseui';

const StyledList = styled('ul', ({$theme}) => ({
  padding: 0,
  margin: 0,
}));

const List = ({children}) => {
  return <StyledList>{children}</StyledList>;
};

export default List;

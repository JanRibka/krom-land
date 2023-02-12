import React from 'react';

import { GridProps } from '@mui/material/Grid';

import StyledGridContainer from './StyledGridContainer';

export interface IGridContainerProps extends GridProps {}

const GridContainer: React.FC<IGridContainerProps> = (props) => {
  return (
    <StyledGridContainer container {...props}>
      {props.children}
    </StyledGridContainer>
  );
};

export default GridContainer;

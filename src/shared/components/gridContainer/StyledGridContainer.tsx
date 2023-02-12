import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import { IGridContainerProps } from './GridContainer';

const StyledGridContainer = styled(
  ({ justifyContent, ...props }: IGridContainerProps) => (
    <Grid
      {...props}
      sx={{
        justifyContent: !!justifyContent ? justifyContent : "center",
      }}
    />
  )
)({
  display: "flex",
  width: "100%",
});

export default StyledGridContainer;

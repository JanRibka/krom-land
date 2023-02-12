import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import { IGridItemProps } from './GridItem';

const StyledGridItem = styled(({ ...props }: IGridItemProps) => (
  <Grid {...props} />
))({
  display: "flex",
});

export default StyledGridItem;

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const ImageGridWrapperStyled = styled(Box)(({ theme }) => ({
  padding: "0 25px",

  [theme.breakpoints.down("md")]: {
    padding: "0 5px",
  },
}));

export default ImageGridWrapperStyled;

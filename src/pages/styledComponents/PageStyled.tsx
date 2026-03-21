import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const PageStyled = styled(Box)(({ theme }) => ({
  overflow: "hidden",

  ".top-space": {
    height: "110px",
    width: "100%",
    backgroundColor: theme.palette.primary.light,

    [theme.breakpoints.down("md")]: {
      height: "80px",
    },
  },
}));
export default PageStyled;

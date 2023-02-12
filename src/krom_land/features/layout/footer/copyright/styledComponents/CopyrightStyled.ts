import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const CopyrightStyled = styled(Box)(({ theme }) => ({
  p: {
    width: "100%",
    height: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    color: "text.secondary",

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      fontSize: "0.8rem",
    },

    a: {
      color: theme.palette.common.red.main,
    },
  },
}));

export default CopyrightStyled;

import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const SlideContentStyled = styled(Stack)(({ theme }) => ({
  alignItems: "center",

  ".text-first-line": {
    fontSize: "50px",
    color: theme.palette.common.purple.dark,

    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
    },
  },

  ".text-second-line": {
    maxWidth: "600px",
    fontSize: "20px",
    textAlign: "center",
    textAlignLast: "center",

    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      maxWidth: "90%",
    },
  },

  ".text-third-line": {
    paddingTop: "15px",
    fontSize: "25px",
    color: theme.palette.common.purple.dark,

    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
  },
}));

export default SlideContentStyled;

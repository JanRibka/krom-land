import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

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

  ".skeleton-text-first-line": {
    height: "20px",
    maxWidth: "600px",
    width: "100%",

    [theme.breakpoints.down("md")]: {
      height: "15px",
      maxWidth: "90%",
    },
  },

  ".skeleton-text-second-line": {
    height: "20px",
    maxWidth: "550px",
    width: "100%",

    [theme.breakpoints.down("md")]: {
      height: "15px",
      maxWidth: "85%",
    },
  },

  ".skeleton-text-third-line": {
    height: "20px",
    maxWidth: "600px",
    width: "100%",

    [theme.breakpoints.down("md")]: {
      height: "15px",
      maxWidth: "90%",
    },
  },

  ".skeleton-name": {
    marginTop: "32px",
    height: "25px",
    maxWidth: "400px",
    width: "100%",

    [theme.breakpoints.down("md")]: {
      height: "20px",
      maxWidth: "70%",
    },
  },
}));

export default SlideContentStyled;

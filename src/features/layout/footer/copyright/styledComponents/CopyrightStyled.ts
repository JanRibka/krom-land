import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const CopyrightStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "80%",
  maxWidth: "1100px",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    fontSize: "0.8rem",

    ".right": {
      justifyContent: "center",
    },
  },

  ".right": {
    display: "flex",
    alignItems: "center",

    a: {
      textDecoration: "underline",
      cursor: "pointer",

      "&:last-of-type": {
        marginLeft: "50px",
      },
    },
  },

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
  },

  a: {
    color: theme.palette.common.red.main,

    "&:hover": {
      color: theme.palette.common.red.dark,
    },
  },
}));

export default CopyrightStyled;

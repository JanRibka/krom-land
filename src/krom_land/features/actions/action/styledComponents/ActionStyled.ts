import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const ActionStyled = styled(Box)(({ theme }) => ({
  display: "none",
  position: "relative",
  zIndex: 1,
  justifyContent: "center",
  height: "auto",
  padding: "50px 0",
  width: "100%",

  "& > div > div": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  "&.active": {
    display: "flex",
  },

  ".action-image": {
    height: "550px",
    width: "auto",
    objectFit: "cover",
    borderRadius: "30px",

    [theme.breakpoints.down("lg")]: {
      maxWidth: "440px",
    },

    [theme.breakpoints.down("md")]: {
      height: "300px",
      width: "90%",
      maxWidth: "100%",
    },
  },

  ".description-wrapper": {
    maxWidth: "500px",
    display: "inline-block",
    height: "100%",

    "& > div": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
    },

    ".description-inner-wrapper": {
      p: {
        textAlign: "justify",
        textAlignLast: "center",
      },
    },

    ".button-wrapper": {
      alignSelf: "center",
      paddingTop: "15px",
      width: "100%",

      ".second, .third": {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.primary,
      },

      p: {
        textAlign: "center",
        textAlignLast: "center",
      },
    },

    [theme.breakpoints.down("md")]: {
      width: "90%",
      maxWidth: "90%",
    },
  },

  ".player-wrapper": {
    width: "90%",
    maxWidth: "90%",
    paddingTop: "25px",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",

    div: {
      width: "100%",
      maxWidth: "100%",
    },
  },
}));

export default ActionStyled;

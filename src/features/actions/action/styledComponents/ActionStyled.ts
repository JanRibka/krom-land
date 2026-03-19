import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const ActionStyled = styled(Box)(({ theme }) => ({
  display: "none",
  position: "relative",
  zIndex: 1,
  justifyContent: "center",
  height: "auto",
  padding: "80px 0",
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

  ".action-image-wrapper": {
    borderRadius: "30px",
    maxWidth: "550px",
    width: "100%",
    aspectRatio: "1/1",
    overflow: "hidden",
    backgroundColor: grey[400],

    [theme.breakpoints.down("lg")]: {
      width: "90%",
      maxWidth: "100%",
    },

    ".action-image": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      transition: "all 1000ms cubic-bezier(.8, 0, .33, 1)",

      "&:hover": {
        scale: "1.2",
      },
    },
  },

  ".description-wrapper": {
    width: "100%",
    maxWidth: "600px",
    display: "inline-block",
    height: "100%",
    padding: "15px 0",

    "& > div": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
    },

    ".description-inner-wrapper": {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",

      p: {
        textAlign: "justify",
        textAlignLast: "center",

        [theme.breakpoints.up("md")]: {
          fontSize: "1.1em",
        },
      },

      ".skeleton-line": {
        height: "10px",
      },

      ".skeleton-paragraph": {
        height: "70px",
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

    [theme.breakpoints.down("lg")]: {
      width: "90%",
      maxWidth: "90%",
      height: "unset",
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

  ".price-remark": {
    textAlign: "center",
    textAlignLast: "center",
    alignSelf: "center",

    [theme.breakpoints.down("lg")]: {
      width: "90%",
      maxWidth: "90%",
    },
  },
}));

export default ActionStyled;

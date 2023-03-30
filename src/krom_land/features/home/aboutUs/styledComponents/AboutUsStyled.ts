import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const AboutUsStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  justifyContent: "center",
  height: "auto",
  padding: "80px 0",
  width: "100%",
  display: "flex",
  backgroundColor: theme.palette.primary.light,

  "& > div > div": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  ".about-us-image-wrapper": {
    // height: "550px",
    aspectRatio: "1/1",
    borderRadius: "30px",
    maxWidth: "550px",
    width: "100%",
    overflow: "hidden",
    backgroundColor: grey[400],

    [theme.breakpoints.down("lg")]: {
      width: "90%",
      maxWidth: "100%",
    },

    ".about-us-image": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      transition: "all 1000ms ease-in-out",

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
      height: "fit-content",
    },
  },
}));

export default AboutUsStyled;

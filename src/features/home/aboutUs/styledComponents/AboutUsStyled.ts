import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const AboutUsStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  justifyContent: "center",
  height: "auto",
  padding: "80px 0",
  width: "100%",
  display: "flex",
  backgroundColor: theme.palette.primary.light,

  ".about-us-content-wrapper": {
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 24px",
  },

  ".about-us-main-layout": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  ".about-us-image-wrapper": {
    aspectRatio: "1/1",
    borderRadius: "30px",
    maxWidth: "550px",
    width: "100%",
    overflow: "hidden",
    backgroundColor: "rgba(180, 180, 180, 0.4)",
    backdropFilter: "blur(12px)",
    position: "relative",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
    border: `1px solid ${
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.15)"
        : "rgba(0, 0, 0, 0.1)"
    }`,

    [theme.breakpoints.down("lg")]: {
      maxWidth: "100%",
    },

    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)",
      ".about-us-image": {
        transform: "scale(1.1)",
      },
    },

    ".about-us-image": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      transition: "transform 0.8s ease",
    },
  },

  ".description-wrapper": {
    width: "100%",
    maxWidth: "800px",
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
      justifyContent: "center",

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
      maxWidth: "100%",
      height: "fit-content",
    },
  },
}));

export default AboutUsStyled;

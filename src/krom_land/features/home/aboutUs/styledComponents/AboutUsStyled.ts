import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const AboutUsStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  justifyContent: "center",
  height: "auto",
  padding: "50px 0",
  width: "100%",
  display: "flex",

  "& > div > div": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  ".about-us-image-wrapper": {
    height: "550px",
    borderRadius: "30px",
    maxWidth: "550px",
    width: "100%",
    backgroundColor: grey[400],

    [theme.breakpoints.down("lg")]: {
      maxWidth: "440px",
    },

    [theme.breakpoints.down("md")]: {
      height: "300px",
      width: "90%",
      maxWidth: "100%",
    },

    ".about-us-image": {
      objectFit: "cover",
      borderRadius: "30px",
      width: "100%",
      height: "100%",
    },
  },

  ".description-wrapper": {
    width: "100%",
    maxWidth: "500px",
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
        textAlign: "center",
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

      ".service-icon": {
        marginTop: "20px",

        "&:first-of-type": {
          paddingRight: "10px",
        },

        "&:nth-of-type(2)": {
          padding: "0 5px",
        },

        "&:last-of-type": {
          paddingLeft: "10px",
        },

        [theme.breakpoints.down("md")]: {
          "&:first-of-type": {
            paddingRight: "10px",
          },

          "&:nth-of-type(2)": {
            padding: "0 0 0 10px",
          },

          "&:last-of-type": {
            paddingLeft: "0px",
          },
        },

        ".service-icon-inner-wrapper": {
          backgroundColor: theme.palette.primary.light,
          borderRadius: "20px",
          width: "100%",
          minHeight: "210px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          h4: {
            fontSize: "1em",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: "1.58em",

            "&:first-of-type": {
              marginTop: "20px",
            },
          },
        },
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
}));

export default AboutUsStyled;

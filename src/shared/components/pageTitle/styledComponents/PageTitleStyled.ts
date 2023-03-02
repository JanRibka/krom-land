import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const TitleStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: grey[500],

  img: {
    width: "100%",
    objectFit: "cover",

    [theme.breakpoints.down("md")]: {
      minHeight: "175px",
    },
  },

  ".animation-effect": {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",

    ".title-wrapper": {
      position: "absolute",
      display: "flex",
      alignItems: "center",

      h1: {
        color: theme.palette.text.secondary,
        fontSize: "6rem",
        fontFamily: "'Eater', 'Helvetica','Arial','sans-serif'",
        textAlign: "center",

        [theme.breakpoints.down("lg")]: {
          fontSize: "5rem",
        },

        [theme.breakpoints.down("sm")]: {
          fontSize: "3rem",
        },
      },

      h6: {
        fontFamily: "'Marck Script', 'Helvetica','Arial','sans-serif'",
        fontSize: "2rem",
        color: theme.palette.secondary.light,
      },
    },
  },
}));

export default TitleStyled;

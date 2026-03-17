import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const TitleStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: grey[500],
  overflow: "hidden",

  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)",
    pointerEvents: "none",
  },

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

      ".main-text": {
        color: theme.palette.text.secondary,
        fontSize: "6rem",
        fontFamily: "'Eater', 'Helvetica','Arial','sans-serif'",
        textAlign: "center",
        textShadow: "0 8px 30px rgba(0,0,0,0.7)",

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
        textShadow: "0 4px 15px rgba(0,0,0,0.8)",
      },
    },
  },
}));

export default TitleStyled;

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
    maxHeight: "350px",
    minHeight: "350px",
    objectFit: "cover",

    [theme.breakpoints.down("md")]: {
      minHeight: "175px",
    },
  },

  h1: {
    position: "absolute",
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
}));

export default TitleStyled;

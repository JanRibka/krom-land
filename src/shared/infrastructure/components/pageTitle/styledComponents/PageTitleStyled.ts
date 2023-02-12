import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const TitleStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

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
    fontFamily: "Eater",
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

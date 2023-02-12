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
    minHeight: "175px",
    objectFit: "cover",
  },

  h1: {
    position: "absolute",
    color: theme.palette.text.secondary,
    fontSize: "100px",
    fontFamily: "Eater",
  },
}));

export default TitleStyled;

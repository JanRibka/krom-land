import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const TitleStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  h1: {
    position: "absolute",
    color: theme.palette.text.secondary,
    fontSize: "100px",
    fontFamily: "Eater",
  },
}));

export default TitleStyled;

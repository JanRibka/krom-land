import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const MainMenuStyled = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  justifyContent: "end",

  ul: {
    alignItems: "center",

    li: {
      color: theme.palette.text.primary,
      padding: "15px",
      fontSize: "1.1em",
      fontWeight: "bold",
      letterSpacing: "0.02857em",
      transition: "padding 200ms ease-in-out",
      textTransform: "uppercase",
    },
  },
}));

export default MainMenuStyled;

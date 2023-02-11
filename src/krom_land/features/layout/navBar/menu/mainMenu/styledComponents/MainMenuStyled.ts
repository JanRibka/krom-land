import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const MainMenuStyled = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  justifyContent: "end",

  ul: {
    alignItems: "center",

    li: {
      color: theme.palette.text.primary,
      padding: "15px",
      fontSize: "1.1em",
      fontWeight: "bold",
      letterSpacing: "0.02857em",
      transition: "all 200ms ease-in-out",
      textTransform: "uppercase",
      position: "relative",
      width: "100px",
      height: "55px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "-15px",

      "&:nth-child(1)": {
        backgroundColor: theme.palette.secondary.main,
      },

      "&:nth-child(2)": {
        backgroundColor: theme.palette.primary.main,
      },

      "&:nth-child(3)": {
        width: "130px",
        backgroundColor: theme.palette.common.red.main,
      },

      "&:nth-child(4)": {
        width: "150px",
        backgroundColor: theme.palette.common.purple.main,
      },

      "&:hover, &.active": {
        zIndex: 1,
        transform: "scale(1.1)",
      },

      a: {
        position: "absolute",
        transform: "rotate(-10deg)",
        transformOrigin: "center",
      },
    },
  },
}));

export default MainMenuStyled;

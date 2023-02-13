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

      "&:nth-of-type(1)": {
        backgroundColor: theme.palette.secondary.main,
      },

      "&:nth-of-type(2)": {
        backgroundColor: theme.palette.primary.main,
      },

      "&:nth-of-type(3)": {
        width: "130px",
        backgroundColor: theme.palette.common.purple.main,
      },

      "&:nth-of-type(4)": {
        width: "150px",
        backgroundColor: theme.palette.common.red.main,
      },

      "&:hover": {
        transform: "scale(1.1)",
      },

      "&.active": {
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

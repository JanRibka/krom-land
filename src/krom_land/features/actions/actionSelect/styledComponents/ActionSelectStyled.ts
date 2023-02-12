import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const ActionSelectStyled = styled(Box)(({ theme }) => ({
  ul: {
    display: "flex",
    listStyleType: "none",
    alignItems: "center",

    li: {
      backfaceVisibility: "hidden",
      color: theme.palette.text.primary,
      padding: "15px",
      fontSize: "1.1em",
      fontWeight: "bold",
      letterSpacing: "0.02857em",
      transition: "all 200ms ease-in-out",
      textTransform: "uppercase",
      position: "relative",
      width: "100px",
      minWidth: "150px",
      height: "70px",
      borderRadius: "140px 140px 0 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "-15px",
      cursor: "pointer",

      "&:nth-of-type(1)": {
        backgroundColor: theme.palette.secondary.main,
        marginLeft: 0,
      },

      "&:nth-of-type(2)": {
        backgroundColor: theme.palette.primary.main,
      },

      "&:nth-of-type(3)": {
        width: "150px",
        backgroundColor: theme.palette.common.purple.main,
      },

      "&:hover, &.active": {
        zIndex: 1,
        transform: "scale(1.05)",
      },

      span: {
        textDecoration: "none",
        color: "inherit",
        position: "absolute",
        transform: "rotate(-10deg)",
        transformOrigin: "center",
      },
    },
  },

  ".tabs-wrapper": {
    ".action-tab": {
      display: "none",

      "&.active": {
        display: "block",
      },
    },
  },
}));

export default ActionSelectStyled;

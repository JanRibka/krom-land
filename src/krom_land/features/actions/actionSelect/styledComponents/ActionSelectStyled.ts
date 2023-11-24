import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const ActionSelectStyled = styled(Box)(({ theme }) => ({
  padding: "80px 0",

  ".menu-wrapper": {
    overflow: "auto",

    ul: {
      display: "flex",
      listStyleType: "none",
      alignItems: "center",
      marginBottom: 0,
      paddingTop: "3px",

      [theme.breakpoints.down("md")]: {
        paddingLeft: "0",
        alignSelf: "center",
        justifyContent: "center",
        width: "100%",
        overflowX: "auto",
        overflowY: "hidden",
      },

      [theme.breakpoints.down("sm")]: {
        width: "fit-content",
      },

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
        width: "150px",
        minWidth: "150px",
        height: "70px",
        borderRadius: "140px 140px 0 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "-15px",
        cursor: "pointer",
        paddingBottom: "5px",
        WebkitTapHighlightColor: "transparent",

        "&:nth-of-type(1)": {
          backgroundColor: theme.palette.secondary.main,
          marginLeft: 0,
        },

        "&:nth-of-type(2)": {
          backgroundColor: theme.palette.primary.main,
        },

        "&:nth-of-type(3)": {
          backgroundColor: theme.palette.common.purple.main,
        },

        "&:nth-of-type(4)": {
          backgroundColor: theme.palette.common.red.main,
        },

        "&:nth-of-type(5)": {
          backgroundColor: theme.palette.secondary.main,
        },

        "&:hover, &.active": {
          zIndex: 1,
          transform: "scale(1.05)",
        },

        "&.active": {
          zIndex: 2,
        },

        [theme.breakpoints.down("md")]: {
          width: "100px",
          minWidth: "100px",
          height: "50px",
          fontSize: "0.8em",
          marginLeft: "-5px",
        },

        span: {
          textDecoration: "none",
          color: "inherit",
          position: "absolute",
          transform: "rotate(-10deg)",
          transformOrigin: "center",
        },

        ".skeleton-menu-text": {
          width: "100px",
          height: "20px",

          [theme.breakpoints.down("md")]: {
            width: "70px",
            height: "15px",
          },
        },
      },
    },
  },
}));

export default ActionSelectStyled;

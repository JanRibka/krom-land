import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const DocumentsStyled = styled(Box)(({ theme }) => ({
  display: "none",
  position: "relative",
  zIndex: 1,
  justifyContent: "center",
  height: "auto",
  padding: "80px 0",
  width: "100%",
  backgroundColor: theme.palette.common.red.main,

  "& > div, & > div > div, & > div > div > div": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  "&.active": {
    display: "flex",
  },

  ".document-wrapper": {
    border: "1px solid " + theme.palette.text.primary,
    borderRadius: "5px",
    display: "flex",
    alignItem: "center",
    width: "90%",
    maxWidth: "700px",

    ".document-inner-wrapper": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",

      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",

        "div:first-of-type": {
          marginBottom: "5px",
        },

        "div:last-of-type": {
          marginTop: "5px",
        },
      },

      div: {
        display: "flex",
        alignItems: "center",
        margin: "10px 15px",

        button: {
          color: theme.palette.text.primary,
        },
      },
    },
  },
}));

export default DocumentsStyled;

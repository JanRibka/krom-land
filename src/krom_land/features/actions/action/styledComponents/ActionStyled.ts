import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const ActionStyled = styled(Box)(({ theme }) => ({
  display: "none",
  position: "relative",
  zIndex: 1,
  justifyContent: "center",
  height: "auto",
  padding: "50px 0",
  width: "100%",

  "& > div > div": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  "&.active": {
    display: "flex",
  },

  ".action-image": {
    height: "550px",
    width: "auto",
    objectFit: "cover",
    borderRadius: "30px",

    [theme.breakpoints.down("xl")]: {
      maxWidth: "440px",
    },

    [theme.breakpoints.down("md")]: {
      height: "300px",
      width: "90%",
      maxWidth: "100%",
    },
  },

  ".description-wrapper": {
    maxWidth: "500px",

    [theme.breakpoints.down("md")]: {
      width: "90%",
      maxWidth: "90%",
    },

    p: {
      textAlign: "justify",
      textAlignLast: "center",
    },
  },

  ".player-wrapper": {
    width: "90%",
    maxWidth: "90%",
    paddingTop: "25px",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",

    div: {
      width: "100%",
      maxWidth: "100%",
    },
  },

  ".button-wrapper": {
    alignSelf: "center",
    width: "90%",
    maxWidth: "90%",
    paddingTop: "15px",

    ".second, .third": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.primary,
    },
  },
}));

export default ActionStyled;

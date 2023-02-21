import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

const DialogStyled = styled(Dialog)(({ theme }) => ({
  top: "auto",
  right: 0,
  bottom: 0,
  left: "auto",

  "h2, p": {
    color: theme.palette.text.primary,
  },

  [theme.breakpoints.down("md")]: {
    left: 0,

    "& .MuiDialog-paper": {
      margin: "1em",
      width: "100%",
      maxWidth: "100%",
    },
  },
}));

export default DialogStyled;

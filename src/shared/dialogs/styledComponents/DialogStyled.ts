import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";

const DialogStyled = styled(Dialog)(({ theme }) => ({
  ".MuiPaper-root": {
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      height: "100%",
      maxHeight: "100%",
    },
  },

  ".MuiDialogTitle-root": {
    fontSize: "18px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
  },
}));

export default DialogStyled;

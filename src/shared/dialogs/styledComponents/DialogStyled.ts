import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";

const DialogStyled = styled(Dialog)(({ theme }) => ({
  ".MuiDialogTitle-root": {
    fontSize: "18px",
    color: "white",
    backgroundColor: theme.palette.primary.main,
  },
}));

export default DialogStyled;

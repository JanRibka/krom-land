import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";

const ActionRegistrationDialogStyled = styled(Dialog)(({ theme }) => ({
  ".title-wrapper": {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default ActionRegistrationDialogStyled;

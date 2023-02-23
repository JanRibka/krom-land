import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";

const ActionRegistrationDialogStyled = styled(Dialog)(({ theme }) => ({
  ".MuiPaper-root": {
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      height: "100vh",
      maxHeight: "100vh",
    },
  },

  ".title-wrapper": {
    backgroundColor: theme.palette.primary.main,
  },

  ".MuiFormLabel-root:not(.Mui-focused)": {
    color: theme.palette.text.primary,
  },

  ".MuiCheckbox-root:not(.Mui-checked)": {
    ".MuiSvgIcon-root": {
      color: theme.palette.text.primary,
    },
  },
}));

export default ActionRegistrationDialogStyled;

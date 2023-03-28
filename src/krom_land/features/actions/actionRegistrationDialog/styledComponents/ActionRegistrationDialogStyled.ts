import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";

const ActionRegistrationDialogStyled = styled(Dialog)(({ theme }) => ({
  ".MuiPaper-root": {
    maxWidth: "850px",

    [theme.breakpoints.down("sm")]: {
      margin: 0,
      height: "100%",
      maxHeight: "100%",
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

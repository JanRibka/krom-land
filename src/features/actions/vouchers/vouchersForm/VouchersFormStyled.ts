import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const VouchersFormStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",

  form: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "850px",
    width: "90%",

    ".form-inner-wrapper": {
      width: "100%",

      ".MuiRadio-root:not(.Mui-checked)": {
        ".MuiSvgIcon-root": {
          color: theme.palette.text.primary,
        },
      },

      ".MuiFormLabel-root:not(.Mui-focused)": {
        color: theme.palette.text.primary,
      },

      ".MuiCheckbox-root:not(.Mui-checked)": {
        ".MuiSvgIcon-root": {
          color: theme.palette.text.primary,
        },
      },

      ".gdpr-consent": {
        a: {
          textDecoration: "underline",
          cursor: "pointer",
          pointerEvents: "all",
          color: theme.palette.primary.main,
        },
      },

      ".button-wrapper": {
        display: "flex",
        justifyContent: "center",
      },
    },
  },
}));

export default VouchersFormStyled;

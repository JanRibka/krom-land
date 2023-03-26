import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const WriteToUsStyled = styled(Box)(({ theme }) => ({
  padding: "80px 0",
  display: "flex",
  justifyContent: "center",

  ".write-to-us-wrapper": {
    display: "flex",
    justifyContent: "center",
    maxWidth: "850px",
    width: "90%",

    form: {
      ".write-to-us-form-wrapper": {
        ".first-row-input": {
          width: "50%",

          [theme.breakpoints.down("sm")]: {
            width: "100%",
          },
        },

        ".button-wrapper": {
          display: "flex",
          justifyContent: "center",
        },

        ".MuiFormLabel-root:not(.Mui-focused)": {
          color: theme.palette.text.primary,
        },

        ".MuiCheckbox-root:not(.Mui-checked)": {
          ".MuiSvgIcon-root": {
            color: theme.palette.text.primary,
          },
        },
      },
    },
  },
}));

export default WriteToUsStyled;

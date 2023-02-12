import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const WriteToUsStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",

  form: {
    maxWidth: "850px",
    width: "90%",
    ".write-to-us-wrapper": {
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
}));

export default WriteToUsStyled;

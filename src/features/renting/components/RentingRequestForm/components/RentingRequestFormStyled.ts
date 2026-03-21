import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";

const RentingRequestFormStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",

  form: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "850px",
    width: "100%",

    ".form-inner-wrapper": {
      width: "100%",
      backgroundColor: alpha(theme.palette.background.paper, 0.8),
      backdropFilter: "blur(10px)",
      padding: theme.spacing(4),
      borderRadius: theme.shape.borderRadius * 2,
      boxShadow: `0 8px 32px 0 ${alpha(theme.palette.primary.main, 0.1)}`,
      border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
      transition: "all 0.3s ease-in-out",

      "&:hover": {
        boxShadow: `0 12px 48px 0 ${alpha(theme.palette.primary.main, 0.15)}`,
      },

      ".MuiFormControl-root": {
        "& .MuiInputLabel-root": {
          "&:not(.Mui-focused):not(.MuiInputLabel-shrink)": {
            color: theme.palette.text.primary,
            opacity: 0.6,
          },
          "&.MuiInputLabel-shrink:not(.Mui-focused)": {
            color: theme.palette.text.primary,
            opacity: 0.8,
          },
        },

        "& .MuiOutlinedInput-root": {
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.02),
          },
          "&.Mui-focused": {
            backgroundColor: alpha(theme.palette.primary.main, 0.05),
          },
          "& .MuiOutlinedInput-input": {
            color: theme.palette.text.primary,
          },
        },
      },




      ".MuiRadio-root, .MuiCheckbox-root": {
        transition: "transform 0.2s ease",
        "&:hover": {
          transform: "scale(1.1)",
        },
      },

      ".terms-consent": {
        marginTop: theme.spacing(2),
        a: {
          cursor: "pointer",
          textDecoration: "none",
          fontWeight: 600,
          borderBottom: `2px solid ${alpha(theme.palette.primary.main, 0.3)}`,
          transition: "all 0.2s ease",
          display: "inline-block",
          "&:hover": {
            borderBottomColor: theme.palette.primary.main,
            color: theme.palette.primary.dark,
            transform: "scale(1.02)",
            display: "inline-block",
          },
        },
      },

      ".button-wrapper": {
        marginTop: theme.spacing(4),
        display: "flex",
        justifyContent: "center",
        
        button: {
          paddingLeft: theme.spacing(6),
          paddingRight: theme.spacing(6),
          paddingTop: theme.spacing(1.5),
          paddingBottom: theme.spacing(1.5),
          fontSize: "1.1rem",
          fontWeight: 700,
          borderRadius: theme.spacing(4),
          textTransform: "none",
          boxShadow: `0 4px 14px 0 ${alpha(theme.palette.primary.main, 0.4)}`,
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: `0 6px 20px 0 ${alpha(theme.palette.primary.main, 0.6)}`,
            transform: "translateY(-2px)",
          },
        },
      },
    },
  },
}));

export default RentingRequestFormStyled;

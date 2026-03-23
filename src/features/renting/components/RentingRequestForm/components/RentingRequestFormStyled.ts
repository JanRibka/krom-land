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

      ".renting-table-section": {
        marginBottom: theme.spacing(4),

        ".section-title": {
          fontWeight: 700,
          color: theme.palette.primary.main,
          marginBottom: theme.spacing(2),
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          fontSize: "0.85rem",
        },

        ".table-container": {
          border: "1px solid",
          borderColor: theme.palette.divider,
          borderRadius: theme.spacing(1.5),
          overflow: "hidden",
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0 2px 12px rgba(0,0,0,0.03)",

          ".table-row": {
            transition: "all 0.2s ease",
            "&.Mui-selected": {
              backgroundColor: alpha(theme.palette.primary.main, 0.08),
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.12),
              },
            },
            "&:last-child td": { border: 0 },
            "&.disabled-row": {
              opacity: 0.5,
              cursor: "default",
              pointerEvents: "none",
            },
            "&:not(.disabled-row)": {
              cursor: "pointer",
            },
          },

          ".option-label": {
            fontSize: "0.95rem",
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(1.5),
            "&.selected": {
              fontWeight: 600,
              color: theme.palette.primary.main,
            },
            "&.not-selected": {
              fontWeight: 500,
              color: theme.palette.text.primary,
            },
          },

          ".price-text": {
            fontWeight: 700,
            fontSize: "1rem",
            "&.selected": {
              color: theme.palette.primary.main,
            },
            "&.not-selected": {
              color: theme.palette.text.secondary,
            },
          },

          ".remark-icon": {
            fontSize: "1.1rem",
            color: theme.palette.text.disabled,
            transition: "color 0.2s",
            "&:hover": {
              color: theme.palette.primary.main,
            },
          },
        },
      },

      ".total-price-container": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: theme.spacing(3),
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
        borderRadius: theme.spacing(2),
        border: "2px solid",
        borderColor: theme.palette.primary.main,
        marginTop: theme.spacing(4),

        ".label-wrapper": {
          display: "flex",
          alignItems: "center",
          gap: theme.spacing(2),
          
          ".icon-wrapper": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            padding: theme.spacing(1.5),
            borderRadius: theme.spacing(1.5),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.3)}`,
          },

          ".price-label": {
            color: theme.palette.text.primary,
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontWeight: 800,
            lineHeight: 1.2,
            opacity: 0.8,
          },
        },

        ".price-display": {
          fontWeight: 900,
          color: theme.palette.primary.dark,
          display: "flex",
          alignItems: "baseline",
          gap: theme.spacing(1),

          ".currency": {
            fontWeight: 600,
          },
        },
      },
    },
  },
}));

export default RentingRequestFormStyled;

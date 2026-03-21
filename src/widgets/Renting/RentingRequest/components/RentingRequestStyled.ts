import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";

export const RentingRequestStyled = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(12),
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: `linear-gradient(180deg, ${alpha(
    theme.palette.background.default,
    0,
  )} 0%, ${alpha(theme.palette.primary.main, 0.03)} 50%, ${alpha(
    theme.palette.background.default,
    0,
  )} 100%)`,

  ".section-header": {
    textAlign: "center",
    marginBottom: theme.spacing(6),

    ".MuiTypography-h4": {
      fontWeight: 800,
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(2),
      position: "relative",
      display: "inline-block",

      "&::after": {
        content: '""',
        position: "absolute",
        bottom: -8,
        left: "25%",
        width: "50%",
        height: 4,
        background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
        borderRadius: 2,
      },
    },

    ".MuiTypography-subtitle1": {
      color: theme.palette.text.secondary,
      maxWidth: "600px",
      margin: "0 auto",
    },
  },
}));

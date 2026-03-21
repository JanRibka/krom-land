import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const MainMenuStyled = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  justifyContent: "flex-end", // Best practice: flex-end has broader support than end

  ul: {
    display: "flex",
    alignItems: "center",
    margin: 0,
    padding: 0,

    li: {
      position: "relative",
      display: "flex",
      width: "130px",
      height: "55px",
      marginLeft: "-15px", // Intentional overlap
      borderRadius: "50%",
      color: theme.palette.text.primary,
      fontSize: "1.1rem", // Using rem instead of em ensures scaling respects root <html> font-size
      fontWeight: "bold",
      letterSpacing: "0.03em",
      textTransform: "uppercase",
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)", // A subtle shadow highlights the overlapping logic visually
      transition:
        "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease, z-index 0s", // Springy hover effect
      willChange: "transform, box-shadow",

      "&:nth-of-type(1)": {
        marginLeft: 0, // Removes negative margin from the first element so it doesn't bleed out
        backgroundColor: theme.palette.secondary.main,
      },

      "&:nth-of-type(2)": {
        backgroundColor: theme.palette.primary.main,
      },

      "&:nth-of-type(3)": {
        width: "140px",
        backgroundColor: theme.palette.common.purple.main,
      },

      "&:nth-of-type(4)": {
        backgroundColor: theme.palette.common.red.main,
      },

      "&:nth-of-type(5)": {
        backgroundColor: theme.palette.secondary.main,
      },

      "&:hover, &:focus-within": {
        transform: "scale(1.08)",
        zIndex: 2, // Ensures the hovered element is above surrounding siblings
        boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
      },

      "&.active": {
        zIndex: 1,
        transform: "scale(1.05)",
      },

      // Makes the entire oval a clickable target instead of just the text inside
      a: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: "rotate(-10deg)",
        transformOrigin: "center",
        borderRadius: "50%", // Essential to ensure focus outline respects the parent's curve

        "&:focus-visible": {
          outline: `3px solid ${theme.palette.text.primary}`,
          outlineOffset: "2px",
        },
      },
    },
  },
}));

export default MainMenuStyled;

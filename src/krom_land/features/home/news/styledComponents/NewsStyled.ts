import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const NewsStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  padding: "80px 0",
  backgroundColor: theme.palette.background.default,

  ".news-content-wrapper": {
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 24px",
  },

  ".news-main-layout": {
    display: "flex",
    flexDirection: "row",
    gap: "60px",
    alignItems: "center",
    width: "100%",
    marginTop: theme.spacing(4),

    [theme.breakpoints.down("lg")]: {
      flexDirection: "column-reverse",
      gap: theme.spacing(5),
    },
  },

  ".section-image-wrapper": {
    flexShrink: 0,
    width: "100%",
    maxWidth: "550px",
    aspectRatio: "1/1",
    borderRadius: "30px",
    overflow: "hidden",
    position: "relative",
    backdropFilter: "blur(12px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
    backgroundColor: "rgba(180, 180, 180, 0.4)", // Ochranná poloprůhledná barva
    border: `1px solid ${
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.15)"
        : "rgba(0, 0, 0, 0.1)"
    }`,
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",

    [theme.breakpoints.down("lg")]: {
      maxWidth: "100%",
      alignSelf: "center",
    },

    // Subtle gradient overlay for premium look
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "40%",
      background:
        "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)",
      pointerEvents: "none",
    },

    ".section-image": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.8s ease",
    },

    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)",
      ".section-image": {
        transform: "scale(1.1)",
      },
    },
  },

  ".news-grid-wrapper": {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
    width: "100%",
    minWidth: 0,
  },

  // Flexible news container (replaces masonry grid)
  ".masonry-container": {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(4),
    width: "100%",
    alignItems: "stretch",

    [theme.breakpoints.down("md")]: {
      gap: theme.spacing(3),
    },
  },

  // News card styling
  ".news-item": {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 340px", // Grow to fill space, basis 340px
    maxWidth: "100%",
    gap: theme.spacing(2),
    padding: theme.spacing(3),
    borderRadius: "20px",
    background:
      theme.palette.mode === "dark"
        ? `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(30, 30, 30, 0.95) 100%)`
        : `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(255, 255, 255, 0.98) 100%)`,
    backdropFilter: "blur(12px)",
    border: `1px solid ${
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.15)"
        : "rgba(0, 0, 0, 0.1)"
    }`,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 10px 40px rgba(0, 0, 0, 0.4)"
        : "0 10px 30px rgba(0, 0, 0, 0.08)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    overflow: "hidden",
    position: "relative",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "4px",
      background: `linear-gradient(90deg, 
        ${theme.palette.primary.main}, 
        ${theme.palette.secondary.main})`,
      opacity: 0,
      transition: "opacity 0.3s ease",
    },

    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 20px 50px rgba(0, 0, 0, 0.5)"
          : "0 20px 40px rgba(0, 0, 0, 0.15)",
      borderColor:
        theme.palette.mode === "dark"
          ? "rgba(255, 255, 255, 0.3)"
          : "rgba(0, 0, 0, 0.15)",

      "&::before": {
        opacity: 1,
      },
    },

    // Simplified size variations for flex layout
    "&.size-small": {
      // Small items can be compact
    },

    "&.size-medium": {
      ".news-text": {
        WebkitLineClamp: 8,
      },
    },

    "&.size-large": {
      flex: "1 1 100%", // Large items always take full width
      ".news-text": {
        WebkitLineClamp: 15,
      },
    },

    ".news-date": {
      color: theme.palette.primary.main,
      fontSize: "0.75rem",
      fontWeight: 800,
      letterSpacing: "1px",
      textTransform: "uppercase",
      marginBottom: theme.spacing(0.5),
    },

    ".news-title": {
      fontSize: "1.375rem",
      fontWeight: 800,
      marginBottom: theme.spacing(1.5),
      lineHeight: 1.2,
      color: theme.palette.text.primary,
      letterSpacing: "-0.5px",
    },

    ".news-text": {
      color: "inherit",
      lineHeight: 1.8,
      overflow: "hidden",
      display: "-webkit-box",
      WebkitLineClamp: 6,
      WebkitBoxOrient: "vertical",
      fontSize: "inherit",

      // Fallback if no color is specified in HTML
      "& > *:not([style])": {
        color:
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.85)"
            : "rgba(0, 0, 0, 0.75)",
      },

      // HTML content styling
      "& p": {
        margin: "0 0 1rem 0",

        "&:last-child": {
          margin: 0,
        },
      },

      "& strong, & b": {
        fontWeight: 700,
      },

      "& a": {
        color: theme.palette.primary.main,
        textDecoration: "underline",

        "&:hover": {
          textDecoration: "none",
        },
      },
    },

    "&.size-large .news-text": {
      WebkitLineClamp: 15,
    },

    "&.size-medium .news-text": {
      WebkitLineClamp: 10,
    },
  },
}));

export default NewsStyled;

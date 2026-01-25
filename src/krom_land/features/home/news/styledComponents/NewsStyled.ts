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

  ".section-image-wrapper": {
    gridRow: "span 3",
    width: "100%",
    aspectRatio: "1/1",
    borderRadius: "24px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
    border: `1px solid ${
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.05)"
    }`,
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",

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

    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.8s ease",
    },

    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)",
      img: {
        transform: "scale(1.1)",
      },
    },

    [theme.breakpoints.down("sm")]: {
      gridRow: "span 2",
      maxWidth: "100%",
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

  // Masonry grid container
  ".masonry-container": {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: theme.spacing(4),
    width: "100%",
    gridAutoFlow: "dense",
    alignItems: "start",

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: theme.spacing(3),
    },

    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },

  // News card styling
  ".news-item": {
    display: "flex",
    flexDirection: "column",
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
    height: "100%",
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
      transform: "translateY(-10px) scale(1.01)",
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

    // Size variations based on row span
    "&.size-small": {
      gridRow: "span 2",
    },

    "&.size-medium": {
      gridRow: "span 3",
      ".news-text": {
        WebkitLineClamp: 6,
      },
    },

    "&.size-large": {
      gridRow: "span 4",
      [theme.breakpoints.up("md")]: {
        gridColumn: "span 2",
      },
      ".news-text": {
        WebkitLineClamp: 10,
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

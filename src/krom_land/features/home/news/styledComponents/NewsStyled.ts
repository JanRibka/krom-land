import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const NewsStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  padding: "80px 0",
  backgroundColor: theme.palette.background.default,

  ".news-content-wrapper": {
    display: "flex",
    width: "100%",
    gap: theme.spacing(5),

    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  ".section-image-wrapper": {
    flex: "1 1 40%",
    maxWidth: "500px",
    width: "100%",
    aspectRatio: "3/4",
    borderRadius: "30px",
    overflow: "hidden",
    position: "relative",

    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease",
    },

    "&:hover img": {
      transform: "scale(1.05)",
    },

    [theme.breakpoints.down("lg")]: {
      aspectRatio: "16/9",
      maxWidth: "100%",
    },
  },

  ".news-grid-wrapper": {
    flex: "1 1 60%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
    width: "100%",
  },

  ".news-item": {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    padding: theme.spacing(3),
    borderRadius: "16px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    height: "100%",

    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: theme.shadows[4],
    },

    ".news-date": {
      color: theme.palette.text.secondary,
      fontSize: "0.875rem",
      fontWeight: 500,
    },

    ".news-title": {
      fontSize: "1.25rem",
      fontWeight: 600,
      marginBottom: theme.spacing(1),
      lineHeight: 1.3,
    },

    ".news-text": {
      color: theme.palette.text.secondary,
      lineHeight: 1.6,
      overflow: "hidden",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
    },
  },

  // Layout variations for grid
  ".grid-container": {
    display: "grid",
    gap: theme.spacing(3),
    width: "100%",

    "&.cols-1": {
      gridTemplateColumns: "1fr",
    },
    "&.cols-2": {
      gridTemplateColumns: "repeat(2, 1fr)",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
      },
    },
    // Special layout for 3 items
    "&.cols-3": {
      gridTemplateColumns: "repeat(3, 1fr)",
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
      },
    },
    // Special layout for 4 items
    "&.cols-4": {
      gridTemplateColumns: "repeat(2, 1fr)",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
      },
    },
    // Special layout for 5 items: first one large, or masonry?
    // Let's keep it simple grid for now, maybe 3 on top, 2 on bot
    "&.cols-5": {
      gridTemplateColumns: "repeat(3, 1fr)",
      "& > *:nth-of-type(4), & > *:nth-of-type(5)": {
        gridColumn: "span 1", // or span 1.5 if using 6 cols
      },
      // To center the last two in a 3-col grid is tricky with simple grid.
      // Let's use flex-wrap for 5 items or just 3 cols.
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
      },
    },
  },
}));

export default NewsStyled;

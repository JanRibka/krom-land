import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const MemberStyled = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(255, 192, 203, 0.4)", // Poloprůhledná růžová (primary.light aproximace)
  backdropFilter: "blur(12px)",
  borderRadius: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "350px",
  margin: "0 auto",
  height: "100%",
  padding: theme.spacing(3),
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.15)"
      : "rgba(0, 0, 0, 0.1)"
  }`,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 10px 40px rgba(0, 0, 0, 0.3)"
      : "0 10px 30px rgba(0, 0, 0, 0.05)",

  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 20px 60px rgba(0, 0, 0, 0.5)"
        : "0 20px 50px rgba(0, 0, 0, 0.12)",
    "& .member-image": {
      transform: "scale(1.1)",
    },
  },

  ".member-image-wrapper": {
    height: "auto",
    width: "100%",
    aspectRatio: "3/4",
    borderRadius: "20px",
    overflow: "hidden",
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.grey[400],
    position: "relative",

    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "30%",
      background:
        "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)",
      pointerEvents: "none",
    },

    ".member-image": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.8s ease",
    },
  },

  ".member-name": {
    fontWeight: 800,
    fontSize: "1.5rem",
    marginBottom: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
  },

  ".member-description": {
    textAlign: "center",
    color: theme.palette.text.primary,
    lineHeight: 1.6,
    fontSize: "0.95rem",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default MemberStyled;

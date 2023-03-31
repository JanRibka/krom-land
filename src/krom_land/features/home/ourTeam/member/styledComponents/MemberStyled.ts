import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const MemberStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "fit-content",
  height: "fit-content",
  padding: "20px 20px",

  div: {
    height: "350px",
    maxHeight: "350px",
    width: "210px",
    borderRadius: "10px",
    overflow: "hidden",

    img: {
      height: "inherit",
      maxHeight: "inherit",
      width: "inherit",
      objectFit: "cover",
      transition: "all 1000ms cubic-bezier(.8, 0, .33, 1)",

      // backgroundColor: theme.palette.primary.main,

      "&:hover": {
        scale: "1.3",
      },
    },
  },

  h6: {
    marginTop: "10px",
    fontSize: "25px",
  },

  p: {
    maxWidth: "300px",
    textAlign: "justify",
    textAlignLast: "center",
    minHeight: "72px",
  },
}));

export default MemberStyled;

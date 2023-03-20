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

  img: {
    height: "350px",
    maxHeight: "350px",
    width: "210px",
    borderRadius: "10px",
    // backgroundColor: theme.palette.primary.main,
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

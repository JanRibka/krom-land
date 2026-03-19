import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const ImageGridWrapperStyled = styled(Box)(({ theme }) => ({
  padding: "80px 25px 25px 25px",

  [theme.breakpoints.down("md")]: {
    padding: "80px 5px",
  },

  ".picture-wrapper": {
    margin: "25px",
  },
}));

export default ImageGridWrapperStyled;

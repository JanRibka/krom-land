import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const LogoStyled = styled(Box)(({ theme }) => ({
  height: "100%",
  padding: "5px 0",

  a: {
    display: "block",
    height: "100%",

    img: {
      height: "100%",
    },
  },
}));

export default LogoStyled;

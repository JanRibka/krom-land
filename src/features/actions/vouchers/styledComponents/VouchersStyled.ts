import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const VouchersStyled = styled(Box)(({ theme }) => ({
  display: "none",
  backgroundColor: theme.palette.secondary.main,

  "&.active": {
    display: "flex",
  },

  "& > div": {
    width: "100%",
    padding: "80px 0",
  },
}));

export default VouchersStyled;

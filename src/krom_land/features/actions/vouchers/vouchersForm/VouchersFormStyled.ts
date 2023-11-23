import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const VouchersFormStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",

  form: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "850px",
    width: "90%",
  },
}));

export default VouchersFormStyled;

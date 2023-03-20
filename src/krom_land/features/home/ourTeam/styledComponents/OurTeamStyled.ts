import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const OurTeamStyled = styled(Box)(({ theme }) => ({
  ".MuiGrid-container": {
    padding: "0 10px",

    ".MuiGrid-item": {
      padding: "10px",
      display: "flex",
      justifyContent: "center",
    },
  },
}));

export default OurTeamStyled;

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const AppLoaderStyled = styled(Box)(
  ({ theme }) => `
    width: 175px;
    height:60px;
    position: relative;

    div {
      background-color: ${theme.palette.primary.main};
    }
`
);

export default AppLoaderStyled;

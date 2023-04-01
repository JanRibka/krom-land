import { ThemeProvider } from "@mui/system";

import appLoaderTheme from "./AppLoaderTheme";
import AppLoaderStyled from "./styledComponents/AppLoaderStyled";
import CircleStyled from "./styledComponents/CircleStyled";
import ShadowStyled from "./styledComponents/ShadowStyled";

const AppLoader = () => {
  return (
    <AppLoaderStyled>
      <ThemeProvider theme={appLoaderTheme}>
        <CircleStyled order='first'></CircleStyled>
        <CircleStyled order='second'></CircleStyled>
        <CircleStyled order='third'></CircleStyled>
        <ShadowStyled order='first'></ShadowStyled>
        <ShadowStyled order='second'></ShadowStyled>
        <ShadowStyled order='third'></ShadowStyled>
      </ThemeProvider>
    </AppLoaderStyled>
  );
};

export default AppLoader;

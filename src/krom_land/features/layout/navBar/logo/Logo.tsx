import Box from "@mui/material/Box";

import logo from "../../img/logo.png";
import LogoStyled from "./styledComponents/logoStyled";

const Logo = () => {
  return (
    <LogoStyled>
      <Box
        component='a'
        href={process.env.PUBLIC_URL}
        title='KROM LAND'
        target='_self'
      >
        <img src={logo} alt='Logo KROM Land' loading='lazy' />
      </Box>
    </LogoStyled>
  );
};

export default Logo;

import { useSelector } from "react-redux";
import { selectWebLogos } from "shared/infrastructure/store/webLogos/webLogosSlice";

import Box from "@mui/material/Box";

import LogoStyled from "./styledComponents/logoStyled";

const Logo = () => {
  // Store
  const webLogos = useSelector(selectWebLogos);

  return (
    <LogoStyled>
      <Box
        component='a'
        href={process.env.PUBLIC_URL}
        title='KROM LAND'
        target='_self'
      >
        <img
          src={webLogos.HeaderLogo.Path}
          alt={
            !!webLogos.HeaderLogo.Alt
              ? webLogos.HeaderLogo.Alt
              : "Logo | KROM Land"
          }
          loading='lazy'
        />
      </Box>
    </LogoStyled>
  );
};

export default Logo;

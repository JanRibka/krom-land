import Box from '@mui/material/Box';

import LogoStyled from './styledComponents/logoStyled';

const Logo = () => {
  return (
    <LogoStyled>
      <Box
        component='a'
        href={process.env.PUBLIC_URL}
        title='KROM LAND'
        target='_self'
      >
        KROM LAND
      </Box>
    </LogoStyled>
  );
};

export default Logo;

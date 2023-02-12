import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CopyrightStyled from './styledComponents/CopyrightStyled';

const Copyright = () => {
  // Constants
  const actYear: number = new Date().getFullYear();

  return (
    <CopyrightStyled>
      <Typography>
        &#169; {actYear === 2023 ? actYear : "2023 - " + actYear} KROM Land,
        Webdesign by&nbsp;
        <Box component='a' href='mailto:weby.ribka@gmail.com'>
          JAN RIBKA
        </Box>
      </Typography>
    </CopyrightStyled>
  );
};

export default Copyright;

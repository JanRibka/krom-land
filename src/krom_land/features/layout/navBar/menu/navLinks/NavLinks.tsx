import { forwardRef, Ref } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';

import { AppRoute } from '../../../../../../shared/infrastructure/router/appRoutes';
import NavLinksStyled from './styledComponents/NavLinksStyled';

const NavLinks = forwardRef((props: any, ref: Ref<HTMLDivElement>) => {
  return (
    <NavLinksStyled ref={ref} component='nav' className='nav-links-wrapper'>
      <Box component='ul'>
        <Box component='li' className='active'>
          <Link to={AppRoute.Home}>Úvod</Link>
        </Box>
        <Box component='li'>
          <Link to={AppRoute.Actions}>Akce</Link>
        </Box>
        <Box component='li'>
          <Link to={AppRoute.Gallery}>Galerie</Link>
        </Box>
        <Box component='li'>
          <Link to={AppRoute.Contact}>Kontakt</Link>
        </Box>
      </Box>
    </NavLinksStyled>
  );
});

export default NavLinks;

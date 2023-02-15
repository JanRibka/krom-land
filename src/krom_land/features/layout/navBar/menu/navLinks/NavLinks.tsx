import { forwardRef, Ref } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";

import { AppRoute } from "../../../../../../shared/infrastructure/router/appRoutes";
import NavLinksStyled from "./styledComponents/NavLinksStyled";

interface IProps {
  innerWrapperName: string;
}

const NavLinks = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  return (
    <NavLinksStyled ref={ref} component='nav' className='nav-links-wrapper'>
      <Box component='ul' id={props.innerWrapperName}>
        <Box component='li' data-route={AppRoute.Home}>
          <Link to={AppRoute.Home}>Úvod</Link>
        </Box>
        <Box component='li' data-route={AppRoute.Actions}>
          <Link to={AppRoute.Actions}>Akce</Link>
        </Box>
        <Box component='li' data-route={AppRoute.Gallery}>
          <Link to={AppRoute.Gallery}>Galerie</Link>
        </Box>
        <Box component='li' data-route={AppRoute.Contact}>
          <Link to={AppRoute.Contact}>Kontakt</Link>
        </Box>
      </Box>
    </NavLinksStyled>
  );
});

export default NavLinks;

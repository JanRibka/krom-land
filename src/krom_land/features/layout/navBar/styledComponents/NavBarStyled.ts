import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

const NavBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,

  "&.start-style": {
    // boxShadow: "none",

    "& .MuiToolbar-root": {
      height: "110px",
    },
  },

  "&.scroll-on": {
    "& .MuiToolbar-root": {
      height: "80px",
    },
  },

  "& .MuiToolbar-root": {
    transition: "all 300ms ease",
  },
}));

export default NavBarStyled;

import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

const NavBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
}));

export default NavBarStyled;

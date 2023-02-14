import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const HamburgerIconLineStyled = styled(Box)(({ theme }) => ({
  padding: 0,
  width: "30px",
  height: "2px",
  margin: "5px 0",
  background: theme.palette.text.primary,
  transition: "all 700ms cubic-bezier(.9, 0, .33, 1)",
}));

export default HamburgerIconLineStyled;

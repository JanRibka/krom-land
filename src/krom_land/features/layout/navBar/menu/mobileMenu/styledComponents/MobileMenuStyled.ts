import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const MobileMenuStyled = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  position: "absolute",
  top: 0,
  right: "-290px",
  height: "100vh",
  width: "400px",
  transition: "all 800ms cubic-bezier(.8, 0, .33, 1)",
  borderRadius: "0% 0% 50% 100%",
  display: "flex !important",
  alignItems: "center",
  justifyContent: "center",

  "&.is-opened": {
    right: 0,
    width: "100%",
    borderRadius: "0% 0% 0% 0%",
    background: theme.palette.secondary.main,
  },
}));

export default MobileMenuStyled;

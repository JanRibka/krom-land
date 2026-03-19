import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const HamburgerIconStyled = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "29px",
  right: "35px",
  cursor: "pointer",
  zIndex: 7,
  WebkitTapHighlightColor: "transparent",

  "&.is-opened": {
    "& .line-1": {
      width: "30px",
      transform: "rotate(45deg) translateY(10px)",
      background: theme.palette.text.primary,
    },

    "& .line-2": {
      width: "28px",
      transform: "translate(-50px)",
      background: theme.palette.text.primary,
      opacity: 0,
    },

    "& .line-3": {
      width: "30px",
      transform: "rotate(-45deg) translateY(-10px)",
      background: theme.palette.text.primary,
    },
  },

  ".line-1": {
    width: "30px",
    transform: "rotate(0) translateY(0)",
  },

  ".line-2": {
    width: "28px",
    transform: "rotate(0) translateY(0) translateX(2px)",
  },

  ".line-3": {
    width: "20px",
    transform: "rotate(0) translateY(0) translateX(10px)",
  },
}));

export default HamburgerIconStyled;

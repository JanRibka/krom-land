import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const ButtonUpStyled = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  right: "40px",
  bottom: "40px",
  borderRadius: "5px",
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.primary.main,
  zIndex: 1,
  transition: "transform 450ms ease-in-out",

  "&:not(.to-top-active)": {
    transform: "translateY(100px) !important",
  },

  "&.to-top-active": {
    transform: "translateY(0)",
  },

  [theme.breakpoints.down("sm")]: {
    right: "15px",
    bottom: "15px",
  },

  ":hover": {
    backgroundColor: theme.palette.primary.main,
    transform: "translateY(-10px)",
  },
}));

export default ButtonUpStyled;

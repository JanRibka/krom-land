import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const LogoStyled = styled(Box)(({ theme }) => ({
  a: {
    fontSize: "2rem",
    color: theme.palette.text.primary,
    fontWeight: "bold",
    textDecoration: "none",
    fontStyle: "italic",
  },
}));

export default LogoStyled;

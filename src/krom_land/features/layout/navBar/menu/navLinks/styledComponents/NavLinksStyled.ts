import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const NavLinksStyled = styled(Box)(({ theme }) => ({
  ul: {
    display: "flex",
    listStyleType: "none",

    li: {
      backfaceVisibility: "hidden",

      a: {
        position: "relative",
        textDecoration: "none",
        color: "inherit",
      },
    },
  },
}));

export default NavLinksStyled;

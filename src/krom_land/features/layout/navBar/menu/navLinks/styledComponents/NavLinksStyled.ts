import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const NavLinksStyled = styled(Box)(({ theme }) => ({
  ul: {
    display: "flex",
    listStyleType: "none",

    li: {
      backFaceVisibility: "hidden",

      a: {
        position: "relative",
        textDecoration: "none",
        color: "inherit",

        "&:after": {
          position: "absolute",
          content: "''",
          left: "0",
          bottom: "-5px",
          width: "100%",
          height: "2px",
          backgroundColor: theme.palette.text.primary,
          transform: "translateX(0px) scaleX(0)",
          transformOrigin: "center",
          transition: "transform 300ms ease-in-out",
        },

        "&.active, &:hover": {
          "&:after": {
            transform: "translateX(0px) scaleX(1)",
            transformOrigin: "center",
          },
        },
      },
    },
  },
}));

export default NavLinksStyled;

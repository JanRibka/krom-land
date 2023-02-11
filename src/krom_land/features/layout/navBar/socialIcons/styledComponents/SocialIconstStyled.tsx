import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const SocialIconsStyled = styled(Stack)(({ theme }) => ({
  marginLeft: "25px",

  a: {
    display: "flex",
    alignItems: "cemter",
    color: theme.palette.text.primary,

    svg: {
      transition: "scale 300ms ease",

      "&:hover": {
        scale: "1.2",
      },
    },
  },
}));

export default SocialIconsStyled;

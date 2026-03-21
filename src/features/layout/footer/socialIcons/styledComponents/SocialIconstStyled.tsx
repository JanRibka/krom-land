import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const SocialIconsStyled = styled(Stack)(({ theme }) => ({
  marginLeft: "25px",

  a: {
    display: "flex",
    alignItems: "cemter",
    color: theme.palette.text.primary,
    padding: "12px",
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    transition: "all 300ms ease",

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export default SocialIconsStyled;

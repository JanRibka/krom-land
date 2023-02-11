import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const FooterStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  padding: "50px 0",

  ".footer-wrapper": {
    alignItems: "center",

    ".divider": {
      width: "80%",
      maxWidth: "1100px",
      borderBottomWidth: "medium",
      borderRadius: "2px",
      borderColor: theme.palette.common.purple.main,
    },
  },
}));

export default FooterStyled;

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const DetailInfoStyled = styled(Box)(({ theme }) => ({
  borderRadius: "5px",
  padding: "0 16px",
  border: "2px solid " + theme.palette.primary.dark,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.secondary,
  //   display: "flex",
  //   justifyContent: "center",
  boxShadow:
    "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",

  "&.second, &.third": {
    border: "2px solid " + theme.palette.secondary.dark,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
  },

  padStart: {
    fontWeight: 500,
    margin: "0 15px",
    textAlign: "center",
    textAlignLast: "center",

    "&:first-of-type": {
      marginLeft: 0,
    },

    "&:last-of-type": {
      marginRight: 0,
    },
  },
}));

export default DetailInfoStyled;

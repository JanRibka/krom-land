import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const InfoItemStyled = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "230px",
  width: "230px",

  ".description": {
    fontSize: "20px",
    fontWeight: "bold",
  },
  ".one-line-text": {
    textAlign: "center",
    textAlignLast: "center",
  },

  ".reference": {
    color: theme.palette.common.red.main,
  },

  ".align-center": {
    textAlign: "center",
  },
}));

export default InfoItemStyled;

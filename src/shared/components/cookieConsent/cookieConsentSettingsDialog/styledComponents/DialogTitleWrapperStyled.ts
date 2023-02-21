import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const DialogTitleWrapperStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  button: {
    marginRight: "10px",
  },
}));

export default DialogTitleWrapperStyled;

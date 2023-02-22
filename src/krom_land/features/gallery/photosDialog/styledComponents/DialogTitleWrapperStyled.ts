import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const DialogTitleWrapperStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",

  button: {
    padding: "20px",
    transition: "all 150ms linear",

    "&:hover": {
      transform: "scale(1.2)",
    },
  },
}));

export default DialogTitleWrapperStyled;

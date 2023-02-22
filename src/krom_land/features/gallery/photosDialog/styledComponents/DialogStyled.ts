import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

const DialogStyled = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    margin: 0,
    width: "100vw",
    maxWidth: "100vw",
    height: "100vh",
    maxHeight: "100vh",
    background: "rgba(0, 0, 0, 0.9)",
    overflowX: "hidden",
  },

  ".swiper-pagination": {
    color: "white",
  },
}));

export default DialogStyled;

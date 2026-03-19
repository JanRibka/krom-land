import { SwiperSlide } from 'swiper/react';

import { styled } from '@mui/material/styles';

const SwiperStyledStyled = styled(SwiperSlide)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& div": {
    alignItems: "center",

    "& img": {
      width: "auto",
      height: "auto",
      maxWidth: "100%",
      maxHeight: "94%",
      transform: "translate(-50%, -50%)",
      position: "absolute",
      left: "50%",
      top: "50%",
    },
  },
}));

export default SwiperStyledStyled;

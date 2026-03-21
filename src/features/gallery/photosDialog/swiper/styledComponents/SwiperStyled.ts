import { Swiper } from 'swiper/react';

import { styled } from '@mui/material/styles';

const SwiperStyled = styled(Swiper)(({ theme }) => ({
  width: "100%",
  height: "100%",

  [`& .swiper-button-prev, .swiper-button-next`]: {
    transition: "color 200ms linear",
    color: "rgba(255, 255, 255, 0.1)",

    "&:hover": {
      color: "rgba(255, 255, 255, 1)",
    },
  },

  "& .swiper-pagination-bullet-active": {
    backgroundColor: "#fff",
  },
}));

export default SwiperStyled;

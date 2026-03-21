import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import avatar2 from "../../img/avatar-2-90x90.webp";
import avatar1 from "../../img/avatar-3-90x90.webp";
import avatar3 from "../../img/avatar-4-90x90.webp";

const WhatPeopleSayStyled = styled(Box)(({ theme }) => ({
  padding: "80px 0",
  backgroundColor: theme.palette.common.purple.main,
  ".swiper": {
    height: "400px",

    [theme.breakpoints.down("md")]: {
      height: "320px",
    },

    ".swiper-pagination-bullet": {
      width: "90px",
      height: "90px",
      borderRadius: "50%",
      opacity: "0.5",
      backgroundColor: "transparent",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      transition: "all .3s ease",

      "&.swiper-pagination-bullet-active": {
        opacity: 1,
      },

      [theme.breakpoints.down("md")]: {
        width: "50px",
        height: "50px",
      },

      "&:nth-of-type(1)": {
        backgroundImage: `url(${avatar1})`,
      },

      "&:nth-of-type(2)": {
        backgroundImage: `url(${avatar2})`,
      },

      "&:nth-of-type(3)": {
        backgroundImage: `url(${avatar3})`,
      },
    },
  },
}));

export default WhatPeopleSayStyled;

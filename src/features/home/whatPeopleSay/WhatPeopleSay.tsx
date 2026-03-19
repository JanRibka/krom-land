import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useSelector } from "react-redux";
import SectionTitle from "shared/components/sectionTitle/SectionTitle";
import { selectHomeTestimonials } from "shared/infrastructure/store/home/homeSlice";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PaginationOptions } from "swiper/types";

import { useTheme } from "@mui/material/styles";

import SlideItem from "./slideItem/SlideItem";
import SlideContentStyled from "./styledComponents/SlideContentStyled";
import WhatPeopleSayStyled from "./styledComponents/WhatPeopleSayStyled";

const WhatPeopleSay = () => {
  // Contsnts
  const theme = useTheme();

  // Store
  const homeTestimonials = useSelector(selectHomeTestimonials);

  // Pagination
  const pagination: PaginationOptions = {
    clickable: false,
    renderBullet: (index, className) => {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <WhatPeopleSayStyled>
      <SectionTitle
        mainText="Říkají o nás"
        secondaryText="Doporučení"
        secondaryTextColor={theme.palette.common.purple.dark}
      />
      <Swiper
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={pagination}
        slidesPerView={1}
        speed={1500}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          {/* Slide 1 */}
          <SlideContentStyled spacing={2}>
            <SlideItem
              text={homeTestimonials.peopleSay1Text}
              name={homeTestimonials.peopleSay1Name}
            />
          </SlideContentStyled>
        </SwiperSlide>
        <SwiperSlide>
          {/* Slide 2 */}
          <SlideContentStyled spacing={2}>
            <SlideItem
              text={homeTestimonials.peopleSay2Text}
              name={homeTestimonials.peopleSay2Name}
            />
          </SlideContentStyled>
        </SwiperSlide>
        <SwiperSlide>
          {/* Slide 3 */}
          <SlideContentStyled spacing={2}>
            <SlideItem
              text={homeTestimonials.peopleSay3Text}
              name={homeTestimonials.peopleSay3Name}
            />
          </SlideContentStyled>
        </SwiperSlide>
      </Swiper>
    </WhatPeopleSayStyled>
  );
};

export default WhatPeopleSay;

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PaginationOptions } from "swiper/types";

import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import SectionTitle from "../../../../shared/components/sectionTitle/SectionTitle";
import SlideContentStyled from "./styledComponents/SlideContentStyled";
import WhatPeopleSayStyled from "./styledComponents/WhatPeopleSayStyled";

const WhatPeopleSay = () => {
  // Contsnts
  const theme = useTheme();

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
        mainText='Říkají o nás'
        secondaryText='Doporučení'
        secondaryTextColor={theme.palette.primary.light}
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
            <Typography className='text-first-line'>"</Typography>
            <Typography className='text-second-line'>
              "Děkujeme vám moc za péči o naše děti během víkendové akce. Nyní
              netrpělivě čekají na příští akci a jsou nadšení, že se opět
              setkají se svými kamarády a skvělým personálem. Skvělá práce!"
            </Typography>
            <Typography className='text-third-line'>
              Hanka Štěpánkovice
            </Typography>
          </SlideContentStyled>
        </SwiperSlide>
        <SwiperSlide>
          {/* Slide 2 */}
          <SlideContentStyled spacing={2}>
            <Typography className='text-first-line'>"</Typography>
            <Typography className='text-second-line'>
              "Děkujeme vám moc za péči o naše děti během víkendové akce. Nyní
              netrpělivě čekají na příští akci a jsou nadšení, že se opět
              setkají se svými kamarády a skvělým personálem. Skvělá práce!"
            </Typography>
            <Typography className='text-third-line'>
              Hanka Štěpánkovice
            </Typography>
          </SlideContentStyled>
        </SwiperSlide>
        <SwiperSlide>
          {/* Slide 3 */}
          <SlideContentStyled spacing={2}>
            <Typography className='text-first-line'>"</Typography>
            <Typography className='text-second-line'>
              "Děkujeme vám moc za péči o naše děti během víkendové akce. Nyní
              netrpělivě čekají na příští akci a jsou nadšení, že se opět
              setkají se svými kamarády a skvělým personálem. Skvělá práce!"
            </Typography>
            <Typography className='text-third-line'>
              Hanka Štěpánkovice
            </Typography>
          </SlideContentStyled>
        </SwiperSlide>
      </Swiper>
    </WhatPeopleSayStyled>
  );
};

export default WhatPeopleSay;

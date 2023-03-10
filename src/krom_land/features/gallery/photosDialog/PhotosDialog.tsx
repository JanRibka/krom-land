import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/zoom";

import { Dispatch, useEffect } from "react";
import ImageModel from "shared/models/ImageModel";
import { Keyboard, Mousewheel, Navigation, Pagination, Zoom } from "swiper";

import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

import OpenDialogModel from "./OpenDialoModel";
import DialogContentStyled from "./styledComponents/DialogContentStyled";
import DialogStyled from "./styledComponents/DialogStyled";
import DialogTitleWrapperStyled from "./styledComponents/DialogTitleWrapperStyled";
import SwiperStyled from "./swiper/styledComponents/SwiperStyled";
import SwiperSlideStyled from "./swiper/swiperSlide/styledComponents/SwiperSlideStyled";

interface IProps {
  openData: OpenDialogModel;
  photos: ImageModel[];
  setOpenData: Dispatch<React.SetStateAction<OpenDialogModel>>;
}

const PhotosDialog = (props: IProps) => {
  // Constants
  const theme = useTheme();
  const mdDwn = useMediaQuery(theme.breakpoints.down("md"));

  // Other
  useEffect(() => {
    requestFullScreenMode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.openData.Open]);

  const requestFullScreenMode = () => {
    if (mdDwn) {
      if (props.openData.Open) {
        document.body.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  const RenderPhotos = () => {
    let result: JSX.Element[] = [];

    props.photos.forEach((image, index) => {
      result.push(
        <SwiperSlideStyled key={"dialogImage_" + index}>
          <div className='swiper-zoom-container'>
            <img
              src={image.Path}
              alt={image.Alt}
              // className='swiper-lazy'
              // loading='eager'
            />
          </div>
        </SwiperSlideStyled>
      );
    });

    return result;
  };
  // TODO: Při otevření na mobilu musí jít do fullscreen
  return (
    <DialogStyled open={props.openData.Open} disableScrollLock={false}>
      <DialogTitleWrapperStyled>
        <IconButton
          onClick={() => props.setOpenData({ Open: false, InitialSlide: 0 })}
          color='secondary'
        >
          <CloseIcon />
        </IconButton>
      </DialogTitleWrapperStyled>
      <DialogContentStyled>
        {/* Swiper */}
        <SwiperStyled
          navigation
          loop
          zoom
          keyboard
          mousewheel
          initialSlide={props.openData.InitialSlide}
          slidesPerView={1}
          speed={1500}
          pagination={{ type: "fraction" }}
          modules={[Pagination, Navigation, Zoom, Keyboard, Mousewheel]}
        >
          {RenderPhotos()}
        </SwiperStyled>
      </DialogContentStyled>
    </DialogStyled>
  );
};

export default PhotosDialog;

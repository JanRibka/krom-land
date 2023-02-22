import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/zoom';

import { Dispatch } from 'react';
import PhotoModel from 'shared/models/PhotoModel';
import { Keyboard, Mousewheel, Navigation, Pagination, Zoom } from 'swiper';

import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import OpenDialogModel from './OpenDialoModel';
import DialogContentStyled from './styledComponents/DialogContentStyled';
import DialogStyled from './styledComponents/DialogStyled';
import DialogTitleWrapperStyled from './styledComponents/DialogTitleWrapperStyled';
import SwiperStyled from './swiper/styledComponents/SwiperStyled';
import SwiperSlideStyled from './swiper/swiperSlide/styledComponents/SwiperSlideStyled';

interface IProps {
  openData: OpenDialogModel;
  photos: PhotoModel[];
  setOpenData: Dispatch<React.SetStateAction<OpenDialogModel>>;
}

const PhotosDialog = (props: IProps) => {
  // Other
  const RenderPhotos = () => {
    let result: JSX.Element[] = [];

    props.photos.forEach((image, index) => {
      result.push(
        <SwiperSlideStyled key={"dialogImage_" + index}>
          <div className='swiper-zoom-container'>
            <img
              src={image.Src}
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

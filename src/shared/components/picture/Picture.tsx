import PhotoModel from 'shared/models/PhotoModel';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Box from '@mui/material/Box';

import PictureStyled from './styledComponents/PistureStyled';

interface IProps {
  photo: PhotoModel;
  className?: string;
  enbHover?: boolean;
  handleOpenGalleryOnClick?: (index: number | undefined) => void;
}

const Picture = (props: IProps) => {
  return (
    <PictureStyled
      onClick={() => props.handleOpenGalleryOnClick?.(props.photo.Index)}
      className={
        "picture-wrapper" +
        (props.className || "") +
        (props.enbHover ? " enb-hover" : "")
      }
    >
      <Box className='image-overlay'></Box>
      <Box
        component='img'
        src={props.photo.Src}
        alt={props.photo.Alt}
        loading='lazy'
      />
      <VisibilityOutlinedIcon />
    </PictureStyled>
  );
};

export default Picture;

import ImageModel from "shared/models/ImageModel";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Box from "@mui/material/Box";

import PictureStyled from "./styledComponents/PistureStyled";

interface IProps {
  photo: ImageModel;
  index: number;
  className?: string;
  enbHover?: boolean;
  handleOpenGalleryOnClick?: (index: number | undefined) => void;
}

const Picture = (props: IProps) => {
  return (
    <PictureStyled
      onClick={() => props.handleOpenGalleryOnClick?.(props.index)}
      className={
        "picture-wrapper" +
        (props.className || "") +
        (props.enbHover ? " enb-hover" : "")
      }
    >
      <Box className='image-overlay'></Box>
      <Box
        component='img'
        src={props.photo.Path}
        alt={props.photo.Alt}
        loading='lazy'
      />
      <VisibilityOutlinedIcon />
    </PictureStyled>
  );
};

export default Picture;

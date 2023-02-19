import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Box from "@mui/material/Box";

import PictureStyled from "./styledComponents/PistureStyled";

interface IProps {
  image: string;
  alt: string;
  className?: string;
  enbHover?: boolean;
}

const Picture = (props: IProps) => {
  return (
    <PictureStyled
      className={
        "picture-wrapper" +
        (props.className || "") +
        (props.enbHover ? " enb-hover" : "")
      }
    >
      <Box className='image-overlay'></Box>
      <Box component='img' src={props.image} alt={props.alt} loading='lazy' />
      <VisibilityOutlinedIcon />
    </PictureStyled>
  );
};

export default Picture;

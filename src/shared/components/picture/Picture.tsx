import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Box from "@mui/material/Box";

import PictureStyled from "./styledComponents/PistureStyled";

interface IProps {
  image: string;
  alt: string;
}

const Picture = (props: IProps) => {
  return (
    <PictureStyled>
      <Box className='image-overlay'></Box>
      <Box component='img' src={props.image} alt={props.alt} loading='lazy' />
      <VisibilityOutlinedIcon />
    </PictureStyled>
  );
};

export default Picture;

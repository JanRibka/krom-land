import ImageModel from "shared/models/ImageModel";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import MemberStyled from "./styledComponents/MemberStyled";

interface IProps {
  image: ImageModel;
  name: string;
  text: string;
}

const Member = (props: IProps) => {
  return (
    <MemberStyled>
      <Box
        component='img'
        src={props.image.Path}
        alt={props.image.Alt}
        loading='lazy'
      />
      <Typography variant='h6'>{props.name}</Typography>
      <Typography>{props.text}</Typography>
    </MemberStyled>
  );
};

export default Member;

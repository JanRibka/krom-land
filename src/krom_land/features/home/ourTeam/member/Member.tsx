import ImageModel from "shared/models/ImageModel";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import MemberStyled from "./styledComponents/MemberStyled";

interface IProps {
  image: ImageModel;
  name: string;
  description: string;
}

const Member = (props: IProps) => {
  return (
    <MemberStyled>
      <Box>
        <Box
          component="img"
          src={props.image.path}
          alt={props.image.alt}
          loading="lazy"
        />
      </Box>
      <Typography variant="h6">{props.name}</Typography>
      <Typography>{props.description}</Typography>
    </MemberStyled>
  );
};

export default Member;

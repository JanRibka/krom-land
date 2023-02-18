import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import SectionTitle from "../../../../shared/components/sectionTitle/SectionTitle";
import image from "../img/img_4-copyright.png";
import AboutUsStyled from "./styledComponents/AboutUsStyled";

const AboutUs = () => {
  // Constants
  const theme = useTheme();
  const mdDwn = useMediaQuery(theme.breakpoints.down("md"));
  const pictDescWrapperDirection = mdDwn ? "column" : "row";

  return (
    <AboutUsStyled>
      <Stack spacing={5} direction='column' sx={{ width: "100%" }}>
        {/* Obrázek */}
        <Stack spacing={10} direction={pictDescWrapperDirection}>
          <Box
            component='img'
            src={image}
            alt={"asdf"}
            loading='lazy'
            className='action-image'
          />

          {/* Popis */}
          <Box className='description-wrapper'>
            <Box>
              <Box className='description-inner-wrapper'>
                <SectionTitle mainText={"asdf"} />
                <Typography>{"sdf"}</Typography>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </AboutUsStyled>
  );
};

export default AboutUs;

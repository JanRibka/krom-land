import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import Picture from "../../../../shared/components/picture/Picture";
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
            alt='kh'
            loading='lazy'
            className='about-us-image'
          />

          {/* Popis */}
          <Box className='description-wrapper'>
            <Box>
              <Box className='description-inner-wrapper'>
                <SectionTitle mainText={"O nás"} />
                <Typography>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu,
                  orci. Maecenas aliquet accumsan leo. Integer imperdiet lectus
                  quis justo. Integer tempor. Suspendisse nisl. Integer
                  malesuada. Aenean placerat. Suspendisse nisl. Nulla turpis
                  magna, cursus sit amet, suscipit a, interdum id, felis. In
                  convallis.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </AboutUsStyled>
  );
};

export default AboutUs;

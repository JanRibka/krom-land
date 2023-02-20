import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import GridContainer from "../../../../shared/components/gridContainer/GridContainer";
import GridItem from "../../../../shared/components/gridItem/GridItem";
import SectionTitle from "../../../../shared/components/sectionTitle/SectionTitle";
import IconService1 from "../img/icon_services_1.webp";
import IconService2 from "../img/icon_services_2.webp";
import IconService3 from "../img/icon_services_3.webp";
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
                <Box>
                  <SectionTitle mainText={"O nás"} />
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu,
                    orci. Maecenas aliquet accumsan leo. Integer imperdiet
                    lectus quis justo. Integer tempor. Suspendisse nisl. Integer
                    malesuada. Aenean placerat. Suspendisse nisl. Nulla turpis
                    magna, cursus sit amet, suscipit a, interdum id, felis. In
                    convallis.
                  </Typography>
                </Box>
                <Box>
                  <GridContainer>
                    <GridItem xs={6} md={4} className='service-icon'>
                      <Box className='service-icon-inner-wrapper'>
                        <Box
                          component='img'
                          src={IconService1}
                          alt='Zkyšenosti a důvěřivost'
                        />
                        <Typography variant='h4'>Zkyšenosti</Typography>
                        <Typography variant='h4'>a důvěřivost</Typography>
                      </Box>
                    </GridItem>
                    <GridItem xs={6} md={4} className='service-icon'>
                      <Box className='service-icon-inner-wrapper'>
                        <Box
                          component='img'
                          src={IconService2}
                          alt='Zkyšenosti a důvěřivost'
                        />
                        <Typography variant='h4'>Zkyšenosti</Typography>
                        <Typography variant='h4'>a důvěřivost</Typography>
                      </Box>
                    </GridItem>
                    <GridItem xs={12} md={4} className='service-icon'>
                      <Box className='service-icon-inner-wrapper'>
                        <Box
                          component='img'
                          src={IconService3}
                          alt='Zkyšenosti a důvěřivost'
                        />
                        <Typography variant='h4'>Zkyšenosti</Typography>
                        <Typography variant='h4'>a důvěřivost</Typography>
                      </Box>
                    </GridItem>
                  </GridContainer>
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </AboutUsStyled>
  );
};

export default AboutUs;

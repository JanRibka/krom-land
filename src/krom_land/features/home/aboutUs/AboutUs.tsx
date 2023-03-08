import { useSelector } from 'react-redux';
import { selectHome } from 'shared/infrastructure/store/home/homeSlice';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import GridContainer from '../../../../shared/components/gridContainer/GridContainer';
import GridItem from '../../../../shared/components/gridItem/GridItem';
import SectionTitle from '../../../../shared/components/sectionTitle/SectionTitle';
import IconService1 from '../img/icon_services_1.webp';
import IconService2 from '../img/icon_services_2.webp';
import IconService3 from '../img/icon_services_3.webp';
import image from '../img/img_4-copyright.png';
import AboutUsStyled from './styledComponents/AboutUsStyled';

const AboutUs = () => {
  // Store
  const home = useSelector(selectHome);

  // Constants
  const theme = useTheme();
  const xlDwn = useMediaQuery(theme.breakpoints.down("xl"));
  const lgDwn = useMediaQuery(theme.breakpoints.down("lg"));
  const mdDwn = useMediaQuery(theme.breakpoints.down("md"));
  const pictDescWrapperDirection = mdDwn ? "column" : "row";
  const pictDescWrapperSpacing = lgDwn ? 10 : xlDwn ? 20 : 30;

  return (
    <AboutUsStyled>
      <Stack spacing={5} direction='column' sx={{ width: "100%" }}>
        {/* Obrázek */}
        <Stack
          spacing={pictDescWrapperSpacing}
          direction={pictDescWrapperDirection}
        >
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
                  {home._dataLoaded ? (
                    <Typography>{home.AboutUs}</Typography>
                  ) : (
                    <Stack spacing={1}>
                      <Skeleton variant='rectangular' />
                      <Skeleton variant='rectangular' />
                    </Stack>
                  )}
                </Box>
                <Box>
                  <GridContainer>
                    <GridItem xs={6} md={4} className='service-icon'>
                      <Box className='service-icon-inner-wrapper'>
                        <Box
                          component='img'
                          src={IconService1}
                          alt='Zkušenosti a důvěřivost'
                        />
                        <Typography variant='h4'>Zkušenosti</Typography>
                        <Typography variant='h4'>a důvěřivost</Typography>
                      </Box>
                    </GridItem>
                    <GridItem xs={6} md={4} className='service-icon'>
                      <Box className='service-icon-inner-wrapper'>
                        <Box
                          component='img'
                          src={IconService2}
                          alt='Probíhá v přírodě'
                        />
                        <Typography variant='h4'>Probíhá v</Typography>
                        <Typography variant='h4'>přírodě</Typography>
                      </Box>
                    </GridItem>
                    <GridItem xs={12} md={4} className='service-icon'>
                      <Box className='service-icon-inner-wrapper'>
                        <Box
                          component='img'
                          src={IconService3}
                          alt='Rozmanitost akcí'
                        />
                        <Typography variant='h4'>Rozmanitost</Typography>
                        <Typography variant='h4'>akcí</Typography>
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

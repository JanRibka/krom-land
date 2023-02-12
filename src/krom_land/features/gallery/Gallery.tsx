import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import GridContainer from '../../../shared/components/gridContainer/GridContainer';
import GridItem from '../../../shared/components/gridItem/GridItem';
import Picture from '../../../shared/components/picture/Picture';
import PageTitle from '../../../shared/infrastructure/components/pageTitle/PageTitle';
import TopBackground from './img/contact_top_bg.webp';
import pict01 from './img/post-2-copyright.jpg';

const Gallery = () => {
  return (
    <Stack spacing={10} direction='column'>
      <>
        <PageTitle
          image={TopBackground}
          title='Galerie'
          alt='Úvodní fotka stránky Galerie'
        />
      </>
      <Box sx={{ padding: "0 25px" }}>
        <>
          <GridContainer>
            <GridItem xs={12} sm={6} lg={3}>
              <Picture image={pict01} alt='dfgf' />
            </GridItem>
            <GridItem xs={12} sm={6} lg={3}>
              <Picture image={pict01} alt='dfgf' />
            </GridItem>
            <GridItem xs={12} sm={6} lg={3}>
              <Picture image={pict01} alt='dfgf' />
            </GridItem>
            <GridItem xs={12} sm={6} lg={3}>
              <Picture image={pict01} alt='dfgf' />
            </GridItem>
          </GridContainer>
        </>
        <>
          <GridContainer>
            <GridItem xs={12} sm={6} lg={3}>
              <Picture image={pict01} alt='dfgf' />
            </GridItem>
            <GridItem xs={12} sm={6} lg={3}>
              <Picture image={pict01} alt='dfgf' />
            </GridItem>
            <GridItem xs={12} sm={6} lg={3}>
              <Picture image={pict01} alt='dfgf' />
            </GridItem>
            <GridItem xs={12} sm={6} lg={3}>
              <Picture image={pict01} alt='dfgf' />
            </GridItem>
          </GridContainer>
        </>
        <>
          <GridContainer>
            <GridItem xs={12} sm={6} lg={3}>
              <Picture image={pict01} alt='dfgf' />
            </GridItem>
            <GridItem xs={12} sm={6} lg={3}>
              <Picture image={pict01} alt='dfgf' />
            </GridItem>
            <GridItem xs={12} sm={6} lg={3}>
              <Picture image={pict01} alt='dfgf' />
            </GridItem>
            <GridItem xs={12} sm={6} lg={3}>
              <Picture image={pict01} alt='dfgf' />
            </GridItem>
          </GridContainer>
        </>
      </Box>
    </Stack>
  );
};

export default Gallery;

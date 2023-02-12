import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

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
      <Box>
        <Box sx={{ width: "300px" }}>
          <Picture image={pict01} alt='dfgf' />;
        </Box>
      </Box>
    </Stack>
  );
};

export default Gallery;

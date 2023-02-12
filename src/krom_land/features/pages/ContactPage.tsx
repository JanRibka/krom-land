import Stack from '@mui/material/Stack';

import SectionTitle from '../../../shared/components/sectionTitle/SectionTitle';
import PageTitle from '../../../shared/infrastructure/components/pageTitle/PageTitle';
import GoogleMaps from '../contact/googleMaps/GoogleMaps';
import WritetoUs from '../contact/writeToUs/WriteToUs';
import TopBackground from './img/contact_top_bg.webp';
import PageStyled from './styledComponents/PageStyled';

const ContactPage = () => {
  return (
    <PageStyled component='main'>
      <Stack spacing={10} direction='column'>
        <>
          <PageTitle
            image={TopBackground}
            title='Kontakt'
            alt='Úvodní fotka stránky Kontakt'
          />
        </>
        <>
          <SectionTitle
            mainText='Máte nějaký dotaz?'
            secondaryText='Napište nám'
          />
        </>
        <>
          <WritetoUs />
        </>
        <>
          <GoogleMaps />
        </>
      </Stack>
    </PageStyled>
  );
};

export default ContactPage;

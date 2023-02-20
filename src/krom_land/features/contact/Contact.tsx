import PageTitle from '../../../shared/infrastructure/components/pageTitle/PageTitle';
import GoogleMaps from './googleMaps/GoogleMaps';
import TopBackground from './img/contact_top_bg.webp';
import ContactStyled from './styledComponents/ContactStyled';
import WritetoUs from './writeToUs/WriteToUs';

const Contact = () => {
  return (
    <ContactStyled spacing={10} direction='column'>
      <>
        <PageTitle
          image={TopBackground}
          title='Kontakt'
          alt='Úvodní fotka stránky Kontakt'
          imhHeight={350}
        />
      </>
      <>
        <WritetoUs />
      </>
      <>
        <GoogleMaps />
      </>
    </ContactStyled>
  );
};

export default Contact;

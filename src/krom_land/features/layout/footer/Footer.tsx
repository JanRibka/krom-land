import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AboutUs from './img/about-us.webp';
import Address from './img/address.webp';
import Constct from './img/contact.webp';
import InfoItem from './infoItem/InfoItem';
import FooterStyled from './styledComponents/FooterStyled';

const Footer = () => {
  // Other
  const RenderAboutUsContent = () => {
    return (
      <Typography className='one-line-text'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt
      </Typography>
    );
  };

  const RenderAddressContent = () => {
    return (
      <Box
        component='a'
        href='https://goo.gl/maps/rViVNHBd3D4ZFKuY9'
        target='_balnk'
        className='one-line-text reference'
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt
      </Box>
    );
  };

  const RenderContactContent = () => {
    return (
      <Stack direction='column'>
        <Typography className='align-center'>
          Úřední hodiny: 9:00 - 17:00
        </Typography>
        <Box
          component='a'
          href='tel:778752663'
          className='reference align-center'
        >
          Telefn: 778 752 663
        </Box>
        <Box
          component='a'
          href='mailto:landkrom@gmail.com'
          className='reference align-center'
        >
          E-mail: landkrom@gmail.com
        </Box>
      </Stack>
    );
  };

  return (
    <FooterStyled component='footer'>
      <Stack spacing={5} direction='column' className='footer-wrapper'>
        <Stack direction='row' spacing={3}>
          <InfoItem image={AboutUs} alt='O nás' description='O nás'>
            {RenderAboutUsContent()}
          </InfoItem>
          <InfoItem image={Address} alt='Adresa' description='Adresa'>
            {RenderAddressContent()}
          </InfoItem>
          <InfoItem image={Constct} alt='Kontakt' description='Kontakt'>
            {RenderContactContent()}
          </InfoItem>
        </Stack>

        <Divider className='divider' />
      </Stack>
    </FooterStyled>
  );
};

export default Footer;

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import Copyright from "./copyright/Copyright";
import AboutUs from "./img/about-us.webp";
import Address from "./img/address.webp";
import Constct from "./img/contact.webp";
import InfoItem from "./infoItem/InfoItem";
import SocialIcons from "./socialIcons/SocialIcons";
import FooterStyled from "./styledComponents/FooterStyled";

const Footer = () => {
  // Constants
  const theme = useTheme();
  const mdDwn: boolean = useMediaQuery(theme.breakpoints.down("md"));
  const lgDwn: boolean = useMediaQuery(theme.breakpoints.down("lg"));
  const xlDwn: boolean = useMediaQuery(theme.breakpoints.down("xl"));
  const infoWrapperSpacing: number = mdDwn ? 5 : lgDwn ? 10 : xlDwn ? 15 : 20;
  const infoWrapperDirection = mdDwn ? "column" : "row";

  // Other
  const RenderAboutUsContent = () => {
    return (
      <Stack direction='column'>
        <Typography className='one-line-text align-center'>
          IČO: 19116691
        </Typography>
        <Typography className='one-line-text align-center'>
          DIČ: CZ19116691
        </Typography>
      </Stack>
    );
  };

  const RenderAddressContent = () => {
    return (
      <Box
        component='a'
        href='https://goo.gl/maps/VTBnu2dzb2GtgrvH8'
        target='_balnk'
        className='one-line-text reference'
      >
        Šípková 686, 747 27, Kobeřice
      </Box>
    );
  };

  const RenderContactContent = () => {
    return (
      <Stack direction='column'>
        <Typography className='align-center'>Po - Pa: 9:00 - 17:00</Typography>
        <Box
          component='a'
          href='tel:778752663'
          className='reference align-center'
        >
          Telefon: 778 752 663
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
      <Stack spacing={7} direction='column' className='footer-wrapper'>
        <>
          <Stack direction={infoWrapperDirection} spacing={infoWrapperSpacing}>
            <InfoItem
              image={AboutUs}
              alt='Podnikatelský subjekt'
              description='Subjekt'
            >
              {RenderAboutUsContent()}
            </InfoItem>
            <InfoItem image={Address} alt='Adresa' description='Adresa'>
              {RenderAddressContent()}
            </InfoItem>
            <InfoItem image={Constct} alt='Kontakt' description='Kontakt'>
              {RenderContactContent()}
            </InfoItem>
          </Stack>
        </>
        <>
          <Divider className='divider' />
        </>
        <>
          <SocialIcons />
        </>
        <>
          <Copyright />
        </>
      </Stack>
    </FooterStyled>
  );
};

export default Footer;

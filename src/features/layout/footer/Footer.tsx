import { useSelector } from "react-redux";
import { selectWebSettings } from "shared/infrastructure/store/webSettings/webSettingsSlice";

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
  // Store
  const webSettings = useSelector(selectWebSettings);

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
          IČO: {webSettings.SubjectICO}
        </Typography>
        {!!webSettings.SubjectDIC && (
          <Typography className='one-line-text align-center'>
            DIČ: {webSettings.SubjectDIC}
          </Typography>
        )}
      </Stack>
    );
  };

  const RenderAddressContent = () => {
    return (
      <Box
        component='a'
        href={webSettings.AddressLink}
        target='_balnk'
        className='one-line-text reference'
      >
        {webSettings.AddressAddress}
      </Box>
    );
  };

  const RenderContactContent = () => {
    return (
      <Stack direction='column'>
        <Typography className='align-center'>
          {webSettings.ContactHours}
        </Typography>
        <Box
          component='a'
          href={"tel:" + webSettings.ContactTel.replaceAll(" ", "")}
          className='reference align-center'
        >
          Telefon: {webSettings.ContactTel}
        </Box>
        <Box
          component='a'
          href={"mailto:" + webSettings.ContactEmail}
          className='reference align-center'
        >
          E-mail: {webSettings.ContactEmail}
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
              description={webSettings.SubjectName}
            >
              {RenderAboutUsContent()}
            </InfoItem>
            <InfoItem
              image={Address}
              alt='Adresa'
              description={webSettings.AddressName}
            >
              {RenderAddressContent()}
            </InfoItem>
            <InfoItem
              image={Constct}
              alt='Kontakt'
              description={webSettings.ContactName}
            >
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

import { useSelector } from "react-redux";
import TikTokIcon from "shared/icons/TikTokIcon";
import { selectWebSettings } from "shared/infrastructure/store/webSettings/webSettingsSlice";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Box from "@mui/material/Box";

import SocialIconsStyled from "./styledComponents/SocialIconstStyled";

const SocialIcons = () => {
  // Store
  const webSettings = useSelector(selectWebSettings);

  return (
    <SocialIconsStyled spacing={2} direction='row'>
      <Box
        component='a'
        title='Facebook'
        href={webSettings.FacebookLink}
        target='_blank'
      >
        <FacebookIcon fontSize='small' />
      </Box>

      <Box
        component='a'
        title='Instagram'
        href={webSettings.InstagramLink}
        target='_blank'
      >
        <InstagramIcon fontSize='small' />
      </Box>

      <Box
        component='a'
        title='Tik Tok'
        href={webSettings.TikTokLink}
        target='_blank'
      >
        <TikTokIcon title='Tik Tok' />
      </Box>
    </SocialIconsStyled>
  );
};

export default SocialIcons;

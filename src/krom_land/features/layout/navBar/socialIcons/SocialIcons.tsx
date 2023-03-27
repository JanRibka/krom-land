import TikTokIcon from "shared/icons/TikTokIcon";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Box from "@mui/material/Box";

import SocialIconsStyled from "./styledComponents/SocialIconstStyled";

const SocialIcons = () => {
  // TODO: Pokud zmensim obrazovku bude skryto
  return (
    <SocialIconsStyled
      spacing={2}
      direction='row'
      sx={{ display: { xs: "none", lg: "flex" } }}
    >
      <Box
        component='a'
        title='Facebook'
        href='https://www.facebook.com/profile.php?id=100088439655254'
        target='_blank'
      >
        <FacebookIcon fontSize='small' />
      </Box>

      <Box
        component='a'
        title='Instagram'
        href='https://www.instagram.com/krom.land/'
        target='_blank'
      >
        <InstagramIcon fontSize='small' />
      </Box>

      <Box
        component='a'
        title='Tik Tok'
        href='https://www.tiktok.com/@kromland?_t=8b088AZDwu6&_r=1'
        target='_blank'
      >
        <TikTokIcon title='Tik Tok' />
      </Box>
    </SocialIconsStyled>
  );
};

export default SocialIcons;

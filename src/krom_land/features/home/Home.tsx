import PageTitle from "shared/components/pageTitle/PageTitle";

import Stack from "@mui/material/Stack";

import AboutUs from "./aboutUs/AboutUs";
import TopBackground from "./img/post-5-copyright.jpg";
import WhatPeopleSay from "./whatPeopleSay/WhatPeopleSay";

const Home = () => {
  return (
    <Stack spacing={10} direction='column'>
      <>
        <PageTitle
          image={TopBackground}
          title='KROM Land'
          titleSecondary='Stravte skvěůý víkend s'
          alt='Úvodní fotka stránky Akce'
          imhHeight={760}
          enbFadeEffect
        />
        <AboutUs />
        <WhatPeopleSay />
      </>
    </Stack>
  );
};

export default Home;
